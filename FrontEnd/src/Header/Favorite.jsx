import React, { useState, useEffect, useRef } from 'react'
import { FaHeart, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Favorite() {
    const user = localStorage.getItem('userId')
    const [favorites, setFavorites] = useState([])
    const [error, setError] = useState(null)
    const [alertMessage, setAlertMessage] = useState(null)
    
    const [isVisible, setIsVisible] = useState(false)
    const favoriteRef = useRef(null)

    useEffect(() => {
        const fetchFavorites = async () => {
            if (!user) {
                setError('User not logged in')
                return
            }

            try {
                const response = await fetch(`http://localhost/drive-go/BackEnd/Favorite/favorite.php?userID=${user}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch favorite cars')
                }

                const data = await response.json()
                if (data.error) {
                    throw new Error(data.error)
                }

                setFavorites(data.data || [])
            } catch (err) {
                setError(err.message || 'Something went wrong.')
            }
        }

        fetchFavorites()
        
        const intervalId = setInterval(fetchFavorites, 100)
        return () => clearInterval(intervalId)
    }, [user])

    const removeFromFavorites = async (vehicleId) => {
        try {
            const response = await fetch(`http://localhost/drive-go/BackEnd/Favorite/removeFavorite.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: user, vehicle_id: vehicleId }),
            })

            const result = await response.json()
            if (result.error) {
                setAlertMessage({ type: 'error', text: result.error })
            } else {
                setFavorites(favorites.filter((car) => car.vehicle_id !== vehicleId))
                setAlertMessage({ type: 'success', text: 'Car removed from favorites successfully!' })
            }

            setTimeout(() => setAlertMessage(null), 2000)
        } catch (err) {
            setAlertMessage({ type: 'error', text: 'Failed to remove car from favorites.' })
            setTimeout(() => setAlertMessage(null), 2000)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (favoriteRef.current && !favoriteRef.current.contains(event.target)) {
                setIsVisible(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <div className="p-2 border rounded-full" onClick={() => setIsVisible(!isVisible)}>
                <FaHeart className="w-4 h-4 text-gray-700 cursor-pointer hover:text-red-500" />
            </div>

            {isVisible && (
                <div ref={favoriteRef} className="bg-white w-[30%] absolute top-14 right-44 p-5 border border-gray-200 rounded-lg shadow-lg">
                    {alertMessage && (
                        <div
                            className={`fixed top-1 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-lg ${
                                alertMessage.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                            }`}
                        >
                            {alertMessage.text}
                        </div>
                    )}
                    <h2 className="text-lg font-semibold">Your Favorite Cars</h2>
                    {error ? (
                        <div className="text-gray-500 text-center">
                            <p>{error}</p>
                        </div>
                    ) : favorites.length === 0 ? (
                        <div className="text-gray-500 text-center mt-5">
                            <p>No favorite cars found.</p>
                        </div>
                    ) : (
                        <div className={`space-y-4 mt-5 ${favorites.length > 5 ? 'max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent rounded-lg' : ''}`}>
                            {favorites.map((car) => (
                                <div key={car.vehicle_id} className="flex justify-between items-center space-x-4 border-b pb-2">
                                    <Link to={`/reservation/${car.vehicle_id}`} className="flex items-center space-x-4">
                                        <img src={car.first_img} alt={car.name} className="w-16 h-16 object-cover" />
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-800">{car.name}</h3>
                                            <p className="text-sm text-gray-500">{car.price}</p>
                                        </div>
                                    </Link>
                                    <button
                                        onClick={() => removeFromFavorites(car.vehicle_id)}
                                        className="ml-auto text-red-500 hover:text-red-700"
                                    >
                                        <FaTrash className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default Favorite
