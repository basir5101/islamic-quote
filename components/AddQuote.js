import {useState } from "react";
import Router from 'next/router'

const AddQuote = () => {

    const [quote, setQuote] = useState({});
    const [showQuoteForm, setShowQuoteForm] = useState(false)
    
    const handleQuoteInput = e =>{
        const newQuote = {...quote};
        newQuote[e.target.name] = e.target.value;
        setQuote(newQuote);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const newQuote = await fetch('http://localhost:8000/api/v1/quotes/quran-quotes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(quote),
            });
            const newQuoteData = await newQuote.json();
            if (newQuoteData.status === 'success') {
                setQuote({})
                setShowQuoteForm(false)
                Router.push('/')
            } else {
                alert('Sorry! Something went wrong')
            }
        } catch (error) {
        }
    };

    return (
        <div className = 'mb-5'>
            {
                showQuoteForm ? <form>
                <div className="form-group">
                    <label htmlFor="quotes">Quote: </label>
                    <textarea onChange = {handleQuoteInput} type="text" className="form-control" name="quote" placeholder="write quote"/>
                </div>
                <div className="form-group">
                    <label htmlFor="verse">Verse:</label>
                    <input type="text" onChange = {handleQuoteInput} className="form-control" name="verse" placeholder="verse number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="verse">Your Name:</label>
                    <input type="text" onChange = {handleQuoteInput} className="form-control" name="user" placeholder="Your Name"/>
                </div>
                <button onClick = {(e) => onSubmit(e)} type="submit" className="btn btn-primary">Submit</button>
            </form> :

        <button onClick = {() => setShowQuoteForm(true)} className = 'btn btn-success'> Add New Quote </button>
            }
        </div>
    );
};

export default AddQuote;