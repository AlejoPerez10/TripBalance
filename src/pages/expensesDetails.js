import styles from '@/styles/Home.module.css';
import Form from '@/components/form';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FormatoForm from '@/components/formatoForm';
import PlusCircle from '@/icons/plusCircle.svg';
import { IconChevronLeftPipe } from '@tabler/icons-react';
import Link from 'next/link';

const inputsExpenseDetails = [
    {
        name: 'nombre',
        type: 'text',
        placeholder: 'Expense Name',
        required: true
    },
    {
        name: 'pagado por',
        type: 'select',
        placeholder: 'Paid By',
        required: true,
        options: []
    },
    {
        name: 'valor',
        type: 'text',
        placeholder: 'Price',
        required: true
    },
    {
        name: 'nota',
        type: 'text',
        placeholder: 'Note',
        required: true
    }
];

export default function ExpensesDetailsPage() {
    const [form, setForm] = useState(false);
    const [expenseName, setExpenseName] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [participantNames, setParticipantNames] = useState([]);
    const [organizerName, setOrganizerName] = useState('');
    const [details, setDetails] = useState(false);
    const [selectedExpense, setSelectedExpense] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const { expense } = router.query;
        if (expense) {
            setExpenseName(expense.toUpperCase());

            const storedTrip = localStorage.getItem('SelectedTrip');
            if (storedTrip) {
                const parsedTrip = JSON.parse(storedTrip);

                // Cargar los gastos correspondientes
                if (parsedTrip.Gastos && parsedTrip.Gastos[expense.toUpperCase()]) {
                    setExpenses(parsedTrip.Gastos[expense.toUpperCase()]);
                }

                // Obtener el organizador
                const organizerEmail = parsedTrip.Organizador;
                const organizerData = JSON.parse(localStorage.getItem(organizerEmail));
                setOrganizerName(organizerData ? organizerData.Name : organizerEmail);

                // Obtener los nombres de los participantes
                const participants = parsedTrip.Invitados || [];
                const participantNames = participants.map((email) => {
                    const participant = JSON.parse(localStorage.getItem(email));
                    return participant ? participant.Name : email;
                });

                setParticipantNames(participantNames);
            }
        }
    }, [router.query]);

    const showDetails = () => setDetails(true);
    const hideDetails = () => setDetails(false);

    const handleShowDetails = (expense) => {
        const participants = participantNames.filter((name) => name !== organizerName); // Excluir al organizador
        if (participants.length === 0) {
            alert('¡THERE\'S NO PARTICIPANTS ON THIS TRIP!');
            return;
        }

        const balanceValue = (Number(expense.valor) / participants.length).toFixed(2);

        const balancedExpense = {
            nombre: expense.nombre,
            pagadoPor: expense.pagadoPor,
            participants: participants.map((participant) => ({
                name: participant,
                owes: balanceValue,
                organizer: organizerName
            }))
        };

        setSelectedExpense(balancedExpense);
        showDetails();
    };

    const handleNewExpense = (formData) => {
        const newExpense = {
            nombre: formData.nombre,
            pagadoPor: formData['pagado por'],
            valor: formData.valor,
            nota: formData.nota
        };

        const storedTrip = localStorage.getItem('SelectedTrip');
        if (storedTrip) {
            const parsedTrip = JSON.parse(storedTrip);

            if (expenseName && parsedTrip.Gastos && parsedTrip.Gastos[expenseName]) {
                
                parsedTrip.Gastos[expenseName].push(newExpense);

                localStorage.setItem('SelectedTrip', JSON.stringify(parsedTrip));

                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                if (currentUser && currentUser.Trips) {
                    const updatedTrips = currentUser.Trips.map((trip) =>
                        trip.code === parsedTrip.code ? parsedTrip : trip
                    );
                    currentUser.Trips = updatedTrips;
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                }

                Object.keys(localStorage).forEach((key) => {
                    const storedUser = JSON.parse(localStorage.getItem(key));
                    if (storedUser && storedUser.Trips) {
                        const updatedUserTrips = storedUser.Trips.map((trip) =>
                            trip.code === parsedTrip.code ? parsedTrip : trip
                        );
                        storedUser.Trips = updatedUserTrips;
                        localStorage.setItem(key, JSON.stringify(storedUser));
                    }
                });

                setExpenses([...expenses, newExpense]);
                setForm(false);
            } else {
                console.error(`Invalid expense category: ${expenseName}`);
            }
        }
    };

    const dynamicInputsExpenseDetails = inputsExpenseDetails.map((input) => {
        if (input.name === 'pagado por') {
            return {
                ...input,
                options: [{ value: organizerName, label: organizerName }, ...participantNames.map((name) => ({ value: name, label: name }))]
            };
        }
        return input;
    });

    return (
        <>
            <Link href="/tripDetails">
                <IconChevronLeftPipe color='#ffd05a' className='position-absolute' style={{width:'5%', height:'10%', top:'5%', left:'2%'}}/>
            </Link>

            {details && selectedExpense && (
                <article
                    onClick={hideDetails}
                    className="w-100 min-vh-100 position-fixed z-3"
                    style={{ top: '0', backgroundColor: 'rgba(0,0,0,0.8)', overflowY: 'auto' }}
                >
                    <div onClick={(e) => e.stopPropagation()}>
                        <FormatoForm
                            title={selectedExpense.nombre} // Título dinámico
                            className="position-fixed start-50 top-50 translate-middle w-50"
                        >
                            {selectedExpense.participants.length > 0 ? (
                                selectedExpense.participants.map((participant, index) => (
                                    <div key={index}>
                                        <h3 className="mb-0 text-center" style={{ color: '#ffd05a' }}>
                                            {participant.name}
                                        </h3>
                                        <p className="fs-4 text-white text-center">
                                            Owes ${participant.owes} to {selectedExpense.pagadoPor}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="fs-4 text-white">¡THERE&apos;S NO PARTICIPANTS ON THIS TRIP!</p>
                            )}
                        </FormatoForm>
                    </div>
                </article>
            )}

            <div className="d-flex flex-column mx-auto w-75 rounded-3 p-4 mb-5" style={{ boxShadow: '0 0 20px black' }}>
                <h1 className="fw-bolder" style={{ color: '#ffd05a' }}>{expenseName}</h1>

                <ol>
                    {expenses.length === 0 ? (
                        <p className="text-center fs-4 fw-bolder" style={{ color: '#ffd05a' }}>
                            ¡ADD A NEW EXPENSE!
                        </p>
                    ) : (
                        expenses.map((expense, index) => (
                            <li key={index} className="d-flex flex-column mx-auto w-75 rounded-3 p-4 mb-5 list-unstyled" style={{ boxShadow: '0 0 20px black' }}>
                                <h2 className="fs-2 mb-2" style={{ color: '#ffd05a', fontSize: '35px', fontWeight: 'bolder' }}>
                                    {expense.nombre}
                                </h2>

                                <div className="d-flex flex-column align-items-center m-auto">
                                    <h3 className="fs-3" style={{ color: '#ffd05a', fontWeight: 'bolder' }}>PAID BY</h3>
                                    <p className="fs-4 text-white fw-bolder">{expense.pagadoPor}</p>

                                    <h3 className="fs-3" style={{ color: '#ffd05a', fontWeight: 'bolder' }}>PRICE</h3>
                                    <p className="fs-4 text-white fw-bolder">{expense.valor}</p>

                                    <h3 className="fs-3" style={{ color: '#ffd05a', fontWeight: 'bolder' }}>NOTE</h3>
                                    <p className="fs-4 text-white fw-bolder">{expense.nota}</p>
                                </div>

                                <button
                                    className={`d-flex m-auto border-0 rounded-3 ${styles.buttonsExpensesDetails} ${styles.laserButton}`}
                                    type="button"
                                    style={{ backgroundColor: '#333', color: '#ffd05a' }}
                                    onClick={() => handleShowDetails(expense)}
                                >
                                    BALANCE
                                </button>
                            </li>
                        ))
                    )}
                </ol>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '100%', height: '400px' }}>
                <PlusCircle
                    onClick={() => setForm(true)}
                    className={`${styles.pointer}`}
                    style={{width:'100px', height:'auto'}}
                />
                <p onClick={() => setForm(true)} className={`text-white ${styles.textImgExpensesDetails}`} style={{ cursor: 'pointer' }}>
                    ADD EXPENSE
                </p>
            </div>

            {form && (
                <article
                    onClick={() => setForm(false)}
                    className="w-100 min-vh-100 position-fixed z-3"
                    style={{ top: '0', backgroundColor: 'rgba(0,0,0,0.8)', overflowY: 'auto' }}
                >
                    <div onClick={(e) => e.stopPropagation()}>
                        <Form
                            className="position-fixed start-50 top-50 translate-middle"
                            title="New Expense"
                            inputs={dynamicInputsExpenseDetails}
                            btn="ADD EXPENSE"
                            onSubmit={handleNewExpense}
                            footer={{ text: '¡ Add a new expense !', linkHref: '/' }}
                        />
                    </div>
                </article>
            )}
        </>
    );
}
