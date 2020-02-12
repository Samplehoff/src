const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
        if(type === "ADDNAME") {
            let newName = [...state];
            newName
            

        }

    // Add a Name Tag

    return state;
}