import React from 'react'

const Show = ({ users, setusers }) => {

    const deleteHandler = (index) => {
        const userCopy = [...users]
        userCopy.splice(index, 1)
        setusers(userCopy)
        localStorage.setItem('Users', JSON.stringify(userCopy))
    }

    return (
        <div className="showCarg w-full h-full flex flex-wrap gap-3 p-3">
            {users.map((user, index) => {
                return (<div key={user.id} className="bg-zinc-950 text-zinc-200 flex-shrink-0 rounded-lg w-fit shadow-lg p-5 mb-4">
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                        <p className="text-sm">{user.email}</p>
                        <p className="text-sm">{user.mobile}</p>
                    </div>
                    <button onClick={() => deleteHandler(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-300">
                        Delete
                    </button>
                </div>)

            })}
        </div>
    )
}

export default Show