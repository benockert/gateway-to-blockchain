import { Button, Card } from 'react-onsenui';

import './Landing.css';

export default function Landing() {

    const getCredentialsButtonClick = () => {
        window.location.href = '/home';
    }

    return (
        <div class="landing-page">
            <Card>
                <h3>Welcome to Gateway to Blockchain</h3>
                <Button modifier="large--cta" onClick={() => getCredentialsButtonClick()}>
                    Get Credentials
                </Button> 
            </Card>
        </div>
    )

}