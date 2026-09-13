import './Person.scss'

export default function Person({avatar, first_name, last_name, email}){

    return (
        <div className="person">
            <div className='person__left'>
                <img className='avatar' src={avatar} alt={first_name} />
            </div>
            <div className="person__right">
                <p className='person-first-name'>{first_name}</p>
                <p className='person-lasrt-name'>{last_name}</p>
                <p className='person-email'>{email}</p>
            </div>
        </div>
    )
}