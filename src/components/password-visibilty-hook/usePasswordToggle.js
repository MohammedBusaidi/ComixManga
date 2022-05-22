import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const usePasswordToggle = () => {
    const [visibile, setVisibilty] = useState(false);

    const Icon = (
        <FontAwesomeIcon 
        icon={ visibile ? "eye-slash" : "eye" }
        onClick={() => setVisibilty(visibilty => !visibilty) } 
        />
    )

    const InputType = visibile ? "text" : "password";

    return [InputType, Icon];
}

export default usePasswordToggle;