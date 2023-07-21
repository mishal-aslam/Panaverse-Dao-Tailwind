import {FC} from 'react'

interface IProps {
    header: string;
    description: string;
    haveBorder?: boolean;
}

const QuarterBox:FC<IProps> = ({header, description,haveBorder=true}) => {
  return (
    <div className={`border rounded-md bg-slate-100 w-4/12 relative flex flex-col justify-center px-8 py-12 ${haveBorder===true ? "border" : ""} `}>
    <h4 className="font-bold text-lg">{header}</h4>
    <p className="mt-2 text-slate-600 z-0">{description}</p>
  </div>
  )
}

export default QuarterBox