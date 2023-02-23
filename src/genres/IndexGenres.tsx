import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../endpoints";
import Button from "../utils/Button";
import customConfirm from "../utils/customConfirm";
import GenericList from "../utils/GenericList";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
import { genreDTO } from "./genres.model";

export default function IndexGenres() {
  const [genres, setGenres] = useState<genreDTO[]>();
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
  loadData();
  }, [page, recordsPerPage]);

  function loadData(){
    axios
    .get(urlGenres, {
      params: { page, recordsPerPage },
    })
    .then((response: AxiosResponse<genreDTO[]>) => {
      const totalAmountOfRecords = 
      parseInt(response.headers["totalamountofrecords"],
        10);
      setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
      setGenres(response.data);
    });
  }

  async function deleteGenre(id:number) {
    try{
      await axios.delete(`${urlGenres}/${id}`);
      loadData();
    }
    catch(error){
      // if(error && error.response){
      //   console.error(error.response.data);
        
      // }
    }
  }

  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary" to="/genres/create">
        Create Genre
      </Link>

      <RecordsPerPageSelect
        onChange={(amountOfRecords) => {
          setPage(1);
          setRecordsPerPage(amountOfRecords);
        }}
      />

      <Pagination
        currentPage={page}
        totalAmountOfPages={totalAmountOfPages}
        onChange={(newPage) => setPage(newPage)}
      />

      <GenericList list={genres}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {genres?.map((genre) => (
              <tr key={genre.id}>
                <td>
                  <Link className="btn btn-success" to={`/genres/edit/${genre.id}`}>
                    Edit
                  </Link>

                  <Button 
                  onClick={() =>customConfirm(()=> deleteGenre(genre.id))}
                   className="btn btn-danger">Delete</Button>
                </td>
                <td>{genre.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GenericList>
    </>
  );
}
