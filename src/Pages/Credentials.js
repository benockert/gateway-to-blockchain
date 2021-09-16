import { useState, useEffect} from 'react';
import { SearchInput, Card } from 'react-onsenui';

import './Credentials.css';

export default function Credentials() {
    const [searchQuery, setSearchQuery] = useState("");
    const [credentials, setCredentials] = useState([{title: 'Blockchain Entrepreneaurship', hash: 'a72bdhsjw7384oxs23'}, {title: 'Blockchain Smart Contracts', hash: 'dhdj4j2ld8fl1hdjs423a'}]);





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
            {credentials.map(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()) && <Card><h5>{c.title}</h5><p>{c.hash}</p></Card>)}
        </div>
    )

}