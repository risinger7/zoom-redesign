
import { MdOutlineSchool} from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { RiGovernmentLine } from "react-icons/ri";
import { TbBooks } from "react-icons/tb";
import { BiCog } from "react-icons/bi";
import { BiStore } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import Card from "./Card";


export default function Powering() {

    return (
        <div className="flex mt-24 md:flex-row flex-col w-full justify-center mb-24">

            <div className="flex flex-col text m-8">
                <div className="text md:max-w-md space-y-8">
                    <h1 className="text-4xl font-open-sans font-bold">
                        Powering organizations across industries and geographies
                    </h1>
                    <p className="text-gray-700 font-open-sans text-lg">
                        Zoom helps consolidate communications, connect people, 
                        and collaborate better together in the boardroom, classroom, 
                        operating room, and everywhere in between.
                    </p>
                    <button className="button2 font-open-sans text-xl">Explore Industry Solutions</button>
                </div>
            </div>

            <div className="m-8 grid gap-4 grid-cols-2 grid-rows-3 md:w-1/3 md:mr-8">
                <Card icon={<MdOutlineSchool />} title={"Education"} />
                <Card icon={<FaRegMoneyBillAlt />} title={"Financial Services"} />
                <Card icon={<RiGovernmentLine />} title={"Government"} />
                <Card icon={<AiOutlineHeart />} title={"Healthcare"} />
                <Card icon={<BiCog />} title={"Manufacturing"} />
                <Card icon={<BiStore/>} title={"Retail"} /> 
            </div>

            
           
        </div>
        
       
    )
}