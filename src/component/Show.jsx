import React, { useContext } from 'react'
import { motion } from "framer-motion"
import { usercontext } from '../context/UserContext'

const Show = ({ main }) => {
    const [users, setusers] = useContext(usercontext)
    const deleteHandler = (index) => {
        const userCopy = [...users]
        userCopy.splice(index, 1)
        setusers(userCopy)
        localStorage.setItem('Users', JSON.stringify(userCopy))
    }
    

    return (
        <div  className="showCard w-full flex flex-wrap gap-3 p-3">
            {users.map((user, index) => {
                return (
                    <motion.div
                        key={user.id}
                        className="bg-zinc-950 text-zinc-200 flex-shrink-0 rounded-lg w-fit shadow-lg p-5 mb-4"
                        drag
                        dragConstraints={main}
                        dragElastic={0.01}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.2 }}
                    >
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">{user.name}</h2>
                            <p className="text-sm">{user.email}</p>
                            <p className="text-sm">{user.mobile}</p>
                        </div>
                        <button
                            onClick={() => deleteHandler(index)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-300"
                        >
                            Delete
                        </button>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default Show