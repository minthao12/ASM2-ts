import { useEffect, useState } from "react"
import { ITrip } from "../../interfaces/trips"
import axios from "axios"
import { Link } from "react-router-dom"

const TripList = () => {
    const [trips, setTrips] = useState<ITrip[]>([])
    const getTrips = async () => {
        const { data } = await axios.get("http://localhost:3000/trips?_expand=busHouse&_expand=station")
        setTrips(data)
    }
    useEffect(() => {
        getTrips()
    }, [])
    console.log(trips);
    return <div className="mx-auto max-w-screen-2xl grid gap-6 p-4 md:px-8 2xl:py-6 2xl:px-16">
        <h3 className="flex items-center justify-center text-4xl font-medium">Danh sách chuyến xe</h3>
        <div>
            <Link className="bg-black text-white hover:bg-gray-700 font-semibold py-3 px-16 rounded" to="trips/add">
                Thêm mới chuyến xe
            </Link>
        </div>
        <div className="flex flex-col gap-6">
            {trips.map((trip) => <Trip key={trip.id} data={trip} />)}
        </div>
    </div>
}

const Trip = (props: { data: ITrip }) => {
    return <div className="flex flex-wrap gap-6 items-center justify-center p-8 border border-black text-lg bg-gray-100 rounded shadow-lg">
        <div className="w-[250px] h-[150px] bg-cover bg-center bg-no-repeat mr-5">
            <img className="h-full w-full object-center object-cover" src="xe2.jpg" />
        </div>
        <div className="grid gap-y-6 gap-x-10 mb-6 md:grid-cols-2 xl:flex-1">
            <div>
                <p className="block mb-2 font-medium text-2xl text-gray-900">
                    <Link to={"/admin/trips/" + props.data.id} className="hover:underline">{props.data.busHouse?.name}</Link>
                </p>
            </div>
            <div className="flex gap-2 font-medium text-2xl text-gray-900">
                <h3>
                    Mã chuyến:
                </h3>
                <span>
                    {props.data.id}
                </span>
            </div>
            <div className="flex gap-2 font-medium text-xl text-gray-900">
                <h3>
                    Số ghế còn trống:
                </h3>
                <span className="font-normal">
                    {props.data.seats}
                </span>
            </div>
            <div className="flex gap-2 font-medium text-xl text-gray-900">
                <h3>
                    Giá:
                </h3>
                <span className="font-normal">
                    {props.data.price}
                </span>
            </div>
            <div className="flex flex-wrap gap-2 font-medium text-xl text-gray-900">
                <h3>
                    Khởi hành:
                </h3>
                <span className="font-normal">
                    {props.data.startTime}
                </span>
            </div>
            <div className="flex gap-2 font-medium text-xl text-gray-900">
                <h3>
                    Bến xe:
                </h3>
                <span className="font-normal">
                    {props.data.station?.name}
                </span>
            </div>
            <div className="flex gap-2 font-medium text-xl text-gray-900">
                <h3>
                    Điểm đi:
                </h3>
                <span className="font-normal">
                    {props.data.fromStation}
                </span>
            </div>
            <div className="flex gap-2 font-medium text-xl text-gray-900">
                <h3>
                    Điểm đến:
                </h3>
                <span className="font-normal">
                    {props.data.toStation}
                </span>
            </div>
            <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
  <Link to={"trips/" + props.data.id} className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
    Cập nhập
  </Link>
  <button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    View
  </button>
  <button className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
      Xóa 
  </button>
</div>

        </div>
    </div>
}


export default TripList