import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../ReduxCake/UserActions';


function UserContainer({ userData }) {
    const users = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())

    }, [])

    return (
        <div>
            {
                users.loading ? (<h1>Loading</h1>) :
                    users.error ? (<h2>{users.error}</h2>) :
                        (
                            <div>
                                <h2>List of user</h2>
                                <div>
                                    {users.users && users.users.map(value => {
                                        return <li key={value.id}>{value.name}</li>
                                    })
                                    }
                            </div>
                            </div>
                        )
            }

        </div>
    )
}


export default UserContainer;



