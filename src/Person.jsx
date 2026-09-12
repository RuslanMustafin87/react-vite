import './Person.scss'

export default function Person({avatar, first_name, last_name, email}){

    return (
        <div className="person">
            <div className='person-left'>
                <img src={avatar} alt={first_name} />
            </div>
            <div className="person-right">
                <p className='person-first-name'>{first_name}</p>
                <p className='person-lasrt-name'>{last_name}</p>
                <p className='person-email'>{email}</p>
            </div>
        </div>
    )
}