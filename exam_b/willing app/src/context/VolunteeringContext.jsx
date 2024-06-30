import React, { createContext, useMemo, useState } from 'react';

const initalVolunteering = [{
    volunteeringTitle: 'aaa',
    city: 'tlv',  
    description: 'ccc'
}];

export const VolunteeringContext = createContext();

const VolunteeringContextProvider = ({ children }) => {
    const [Volunteering, setVolunteering] = useState(initalVolunteering);

    const createVolunteering = (volunteering) => {
        setVolunteering(prev => [...prev, volunteering] )
    }

    const value = useMemo(() => ({
        Volunteering,
        createVolunteering
    }), [Volunteering])

    return (
        <VolunteeringContext.Provider value={value}>
            {children}
        </VolunteeringContext.Provider>
    );
};

export default VolunteeringContextProvider;