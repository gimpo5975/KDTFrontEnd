import { useParams } from "react-router-dom";

const ReadPage = () => {

    const {tno} = useParams();
    console.log(tno)


    return (
        <div className="text-3xl font-extrabold">
            Todo Read Page Component
        </div>
    );
};

export default ReadPage;
