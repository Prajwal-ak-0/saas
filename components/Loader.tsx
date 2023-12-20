import { Html } from "@react-three/drei";
import { Spinner } from "@nextui-org/react";


const CanvasLoader = () => {
    return (
        <Html
            as='div'
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Spinner label="Loading..." color="secondary" labelColor="primary" />
        </Html>
    );
};

export default CanvasLoader;