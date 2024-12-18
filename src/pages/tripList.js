import Head from 'next/head';
import ButtonsNav from "@/components/buttonsNav";
import CenterText from "@/components/centerText";
import TravelsTripList from "@/components/travelsTripList";
import Form from '@/components/form';
import React, { useState, useEffect } from 'react';
import Agend from '@/icons/agend.svg'
import NewTrip from '@/icons/newTrip.svg'
import JoinTrip from '@/icons/joinTrip.svg'
import AirplaneTicket from '@/icons/airplaneTicket.svg'

const inputsNewTrip = [
    {
        name: 'trip name',
        type: 'text',
        placeholder: 'Trip Name',
        required: true,
    },
    {
        name: 'currency type',
        type: 'select',
        placeholder: 'Currency Type',
        required: true,
        options: [
            { value: 'COP', label: 'COP' },
            { value: 'USD', label: 'USD' }
        ]
    },
    {
        name: 'add friend',
        type: 'email',
        placeholder: 'Add Friend "Email" (optional)',
        required: false,
    }
];

const inputsJoinATrip = [
    {
        name: 'trip code',
        type: 'text',
        placeholder: 'Trip Code',
        required: true,
    }
];

const codigoRandom = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let code = '';
    for (let i = 0; i < 3; i++) {
        code += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 3; i++) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return code;
};

export default function TripListPage() {
    const [trips, setTrips] = useState([]);
    const [activeComponent, setActiveComponent] = useState('myTrips');
    const [message, setMessage] = useState('');
    const [usuario, setUsuario] = useState(null);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [friendEmail, setFriendEmail] = useState('');

    useEffect(() => {
        if (typeof window !== "undefined") {
            const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { Trips: [] };
            setUsuario(currentUser);
            setTrips(currentUser.Trips);
        }
    }, []);

    const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
    };

    const handleNewTripSubmit = (tripData) => {
        if (usuario) {
            const friendEmail = tripData['add friend']?.trim();
            const tripCode = codigoRandom(); // Generar un código único para el viaje
    
            if (friendEmail) {
                let friendExists = false;
                let friendUser = null;
    
                // Comprobar si el amigo existe en el localStorage
                Object.keys(localStorage).forEach((key) => {
                    const storedUser = JSON.parse(localStorage.getItem(key));
                    if (storedUser && storedUser.Email === friendEmail) {
                        friendExists = true;
                        friendUser = storedUser;
                    }
                });
    
                if (!friendExists) {
                    setMessage('Email not found');
                    setTimeout(() => setMessage(''), 3000);
                    return;
                }
    
                if (friendUser) {
                    const newTripForFriend = {
                        ...tripData,
                        code: tripCode, // Usar el mismo código para el amigo
                        Organizador: usuario.Email,
                        Invitados: [friendEmail],
                        Gastos: { RENT: [], OUTINGS: [], TRANSPORT: [] }
                    };
    
                    // Agregar el viaje a la cuenta del amigo
                    friendUser.Trips = [...friendUser.Trips, newTripForFriend];
                    localStorage.setItem(friendEmail, JSON.stringify(friendUser));
                }
            }
    
            const newTrip = {
                ...tripData,
                code: tripCode, // Usar el mismo código para el creador
                Organizador: usuario.Email,
                Invitados: friendEmail ? [friendEmail] : [],
                Gastos: { RENT: [], OUTINGS: [], TRANSPORT: [] }
            };
    
            // Actualizar la lista de viajes del creador
            const updatedTrips = [...trips, newTrip];
            setTrips(updatedTrips);
    
            usuario.Trips = updatedTrips;
            localStorage.setItem('currentUser', JSON.stringify(usuario));
    
            // Actualizar la cuenta del creador en el localStorage global
            Object.keys(localStorage).forEach((key) => {
                const storedUser = JSON.parse(localStorage.getItem(key));
                if (storedUser && storedUser.Email === usuario.Email) {
                    storedUser.Trips = updatedTrips;
                    localStorage.setItem(key, JSON.stringify(storedUser));
                }
            });
    
            setMessage('TRIP CREATED SUCCESSFULLY');
            setTimeout(() => setMessage(''), 3000);
        }
    };

    const handleJoinTrip = (tripData) => {
        const codeToJoin = tripData['trip code'].toLowerCase();
        let found = false;
    
        if (usuario) {
            let tripToJoin = null;
            let organizerKey = null;
    
            // Buscar el viaje y el organizador en localStorage
            Object.keys(localStorage).forEach((key) => {
                const storedUser = JSON.parse(localStorage.getItem(key));
    
                if (storedUser && storedUser.Trips) {
                    storedUser.Trips.forEach((trip) => {
                        if (trip.code.toLowerCase() === codeToJoin && trip.Organizador !== usuario.Email) {
                            tripToJoin = trip;
                            organizerKey = key;
                            found = true;
                        }
                    });
                }
            });
    
            if (found && tripToJoin && organizerKey) {
                // Agregar usuario actual a la lista de invitados del viaje si no está ya
                if (!tripToJoin.Invitados.includes(usuario.Email)) {
                    tripToJoin.Invitados.push(usuario.Email);
                }
    
                // Verificar si el usuario ya tiene el viaje en su array
                const alreadyJoined = usuario.Trips.some(
                    (t) => t.code.toLowerCase() === tripToJoin.code.toLowerCase()
                );
    
                if (!alreadyJoined) {
                    // Agregar el viaje al usuario actual
                    const updatedTripsUsuario = [...usuario.Trips, tripToJoin];
                    setTrips(updatedTripsUsuario);
                    usuario.Trips = updatedTripsUsuario;
                    localStorage.setItem('currentUser', JSON.stringify(usuario));
    
                    // Actualizar el usuario en localStorage global
                    Object.keys(localStorage).forEach((localKey) => {
                        const localUser = JSON.parse(localStorage.getItem(localKey));
                        if (localUser && localUser.Email === usuario.Email) {
                            localUser.Trips = updatedTripsUsuario;
                            localStorage.setItem(localKey, JSON.stringify(localUser));
                        }
                    });
                }
    
                // Actualizar el viaje en el organizador
                const organizerUser = JSON.parse(localStorage.getItem(organizerKey));
                organizerUser.Trips = organizerUser.Trips.map((t) =>
                    t.code.toLowerCase() === tripToJoin.code.toLowerCase() ? tripToJoin : t
                );
                localStorage.setItem(organizerKey, JSON.stringify(organizerUser));
    
                setMessage('JOINED SUCCESSFULLY');
            } else {
                setMessage('TRIP CODE NOT FOUND');
            }
        }
    
        setTimeout(() => setMessage(''), 3000);
    };

    const handleDetailsClick = (trip) => {
        localStorage.setItem('SelectedTrip', JSON.stringify(trip));
        window.location.href = '/tripDetails';
    };

    const handleButtonClick = (componentName) => setActiveComponent(componentName);

    return (
        <>

            <div className="container-fluid d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4">
                <ButtonsNav name='My Trips' icon=<Agend style={{width:'80px'}}/> onClick={() => handleButtonClick('myTrips')} />
                <ButtonsNav name='New Trip' icon=<NewTrip style={{width:'80px'}}/> onClick={() => handleButtonClick('newTrip')} />
                <ButtonsNav name='Join Trip' icon=<JoinTrip style={{width:'80px'}}/> onClick={() => handleButtonClick('joinTrip')} />
            </div>

            {message &&
                <div className='position-absolute w-100 d-flex justify-content-center mb-0'>
                    <p className="w-50 text-center alert"
                        style={{ marginTop: '21px', backgroundColor: '#4b3f00', color: 'white', boxShadow: '0 0 20px black' }}
                    >
                        {message}
                    </p>
                </div>
            }

            {(activeComponent === 'myTrips') && trips.length === 0 && <CenterText text="CREATE OR JOIN A TRIP" />}
            {(activeComponent === 'myTrips') && trips.length > 0 && (
                <div className='d-flex flex-column align-items-center' style={{ marginTop: '100px' }}>
                    {trips.map((trip, index) => (
                        <TravelsTripList
                            icon=<AirplaneTicket style={{width:'80px', minWidth:'60px'}}/>
                            key={index}
                            name={trip['trip name']}
                            code={trip.code}
                            onClick={() => handleDetailsClick(trip)}
                        />
                    ))}
                </div>
            )}

            {(activeComponent === 'newTrip') && (
                <div style={{ marginTop: '100px' }}>
                    <Form
                        title="Create a New Trip"
                        inputs={inputsNewTrip}
                        btn="SUBMIT"
                        footer={{ text: "¡Trips are limited to 20 participants!" }}
                        onSubmit={handleNewTripSubmit}
                        value={selectedCurrency}
                        onChange={handleCurrencyChange}
                        friendEmail={friendEmail}
                        setFriendEmail={setFriendEmail}
                    />
                </div>
            )}

            {(activeComponent === 'joinTrip') && (
                <div style={{ marginTop: '100px' }}>
                    <Form
                        title='Join a Trip'
                        inputs={inputsJoinATrip}
                        btn='JOIN'
                        footer={{ text: "¡Join a friend's trips!" }}
                        onSubmit={handleJoinTrip}
                    />
                </div>
            )}

        </>
    );
}