import { actorCreationDTO } from './../actors/actors.model.d';

export function convertActorToFormData (actor: actorCreationDTO): FormData{
    const formData = new FormData();

    formData.append('name', actor.name)

    if(actor.biography){
        formData.append('biography', actor.biography);
    }

    if(actor.dateOfBirth){
        formData.append('dateOfBirth', formatDate(actor.dateOfBirth));
    }

    if(actor.picture){
        formData.append('picture', actor.picture);
    }

    return formData;
}

function formatDate(date: Date){
    date = new Date(date);
    const format = new Intl.DateTimeFormat("en",{
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const [
        {value: month},,
        {value: day},,
        {value: year}
    ] = format.formatToParts(date);

    return `${year}-${month}-${day}`;
}