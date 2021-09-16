import { useState, useEffect} from 'react';
import { SearchInput, Card } from 'react-onsenui';

import './Credentials.css';

import { credentials } from '../credentials';

export default function Credentials() {
    const [searchQuery, setSearchQuery] = useState("");


    const getCredentials = () => {
        //call to backend to get credentials
    }

    return (
        <div>
            <h1>Gateway To Blockchain</h1>
            <SearchInput
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            modifier='material'
            placeholder='Search credentials'
            />
            {credentials.map(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
                <Card className="credential-card">
                    <img className="credential-image" src={`/credential-images/${c.image}`} alt={c.image} />
                    <span className="credential-details">
                        <h5 className="credential-title">{c.title}</h5>
                        <p>{c.description.substring(0, 150)}...</p>
                    </span>
                </Card>)
            }
        </div>
    )

}