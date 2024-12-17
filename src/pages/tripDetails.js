import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import FormatoForm from "@/components/formatoForm";
import { useEffect, useState } from 'react';

export default function tripDetailsPage() {
    const [trip, setTrip] = useState(null);
    const [organizerName, setOrganizerName] = useState('');
    const [participantNames, setParticipantNames] = useState([]);

    useEffect(() => {
        const storedTrip = localStorage.getItem('SelectedTrip');
        if (storedTrip) {
            const parsedTrip = JSON.parse(storedTrip);
            setTrip(parsedTrip);

            // Buscar el nombre del organizador
            const organizerEmail = parsedTrip.Organizador;
            const organizer = JSON.parse(localStorage.getItem(organizerEmail));
            if (organizer) {
                setOrganizerName(organizer.Name); // Guardamos el nombre del organizador
            }

            // Buscar los nombres de los participantes
            const participants = parsedTrip.Invitados;
            const participantNames = participants.map((email) => {
                const participant = JSON.parse(localStorage.getItem(email));
                return participant ? participant.Name : email; // Si no se encuentra, usa el email
            });

            setParticipantNames(participantNames);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Trip Details</title>
            </Head>

            <FormatoForm
                className='w-75'
                title='ORGANIZER'
                text={organizerName || 'Loading...'}
            />

            <div className='d-flex flex-column mx-auto w-75 rounded-3 p-4 mb-5' style={{ boxShadow: '0 0 20px black' }}>
                <h2 className='mb-2' style={{ color: '#ffd05a', fontSize: '35px', fontWeight: 'bolder' }}>EXPENSES</h2>

                <div className={`d-flex gap-5 justify-content-center align-items-center mt-4 mb-2 ${styles.expensesTripDetails}`}>
                    <a href={`/expensesDetails?expense=RENT`}
                        className={`btn btn-primary border-0 d-flex justify-content-center align-items-center gap-3 ${styles.laserButton} ${styles.activeButtonsNav} ${styles.aExpensesTripDetails}`}
                        style={{ height: '60px', backgroundColor: '#3c3c3c', boxShadow: '0 0 20px black' }}
                    >
                        <img src="/img/house.svg" alt="logo de casa" />
                        <p className='mb-0 fs-1'>RENT</p>
                    </a>

                    <a href={`/expensesDetails?expense=OUTINGS`}
                        className={`btn btn-primary border-0 d-flex justify-content-center align-items-center gap-3 ${styles.laserButton} ${styles.activeButtonsNav} ${styles.aExpensesTripDetails}`}
                        style={{ height: '60px', backgroundColor: '#3c3c3c', boxShadow: '0 0 20px black' }}
                    >
                        <img src="/img/outings.svg" alt="logo de casa" />
                        <p className='mb-0 fs-1'>OUTINGS</p>
                    </a>

                    <a href={`/expensesDetails?expense=TRANSPORT`}
                        className={`btn btn-primary border-0 d-flex justify-content-center align-items-center gap-3 ${styles.laserButton} ${styles.activeButtonsNav} ${styles.aExpensesTripDetails}`}
                        style={{ height: '60px', backgroundColor: '#3c3c3c', boxShadow: '0 0 20px black' }}
                    >
                        <img src="/img/transport.svg" alt="logo de casa" />
                        <p className='mb-0 fs-1'>TRANSPORT</p>
                    </a>
                </div>
            </div>

            <FormatoForm
                className='w-75'
                title='PARTICIPANTS'
                text={
                    trip
                        ? (participantNames.length > 0
                            ? participantNames.join(', ')
                                : "¡ There are no friends on this trip !")
                        : 'Loading...'
                }
            />

        </>
    );
}