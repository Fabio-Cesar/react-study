export function Name() {
    return (
        <h1>
            Olá, meu nome é {formatName(user)}, tenho {calculateAge(user)} anos e este é meu primeiro contato com JSX.
        </h1>
    )
}

interface IUser {
    firstName: string;
    lastName: string;
    birthYear: number;
}

const user : IUser = {
    firstName: 'Fabio',
    lastName: 'Melo',
    birthYear: 1998
}

function formatName(user : IUser) {
    return `${user.firstName} ${user.lastName}`
}

function calculateAge(user : IUser) {
    const thisYear = new Date().getFullYear();
    return thisYear - user.birthYear;
}