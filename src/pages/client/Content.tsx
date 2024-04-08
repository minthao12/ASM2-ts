import { Link } from "react-router-dom";
const Content = () => {
    return (
        <div className="py-5 w-[980px] mx-auto ">
            <div className="gap-2.5 grid grid-cols-4">
                <div className="bg-transparent">
                    <a href="#" className="block rounded-sm bg-gray-300 shadow-sm shadow-indigo-100 bg-[#9E947C] text-white ">
                        <img src="img/sg_nt.png" className="h-36 w-full object-cover" />
                        <div className="mt-2 pb-8 px-4 pt-2">
                            <div className="font-bold">
                                Sài Gòn - Nha Trang
                            </div>
                            <div className="my-1 text-xs flex items-center">
                                Từ 240,000đ
                                <span className="ml-4 text-xs line-through text-gray-400">
                                    130.000đ
                                </span>

                            </div>
                        </div>
                    </a>
                </div>
                <div>
                <Link to={`/detail`} className="block rounded-sm bg-gray-300 shadow-sm shadow-indigo-100 bg-[#585279] text-white ">
                        <img src="img/hn_hp.png" className="h-36 w-full object-cover" />
                        <div className="mt-2 pb-8 px-4 pt-2">
                            <div className="font-bold">
                                Hà Nội - Hải Phòng
                            </div>
                            <div className="my-1 text-xs flex items-center">
                                Từ 240,000đ
                                <span className="ml-4 text-xs line-through text-gray-400">
                                    130.000đ
                                </span>

                            </div>
                        </div>
                    </Link >
                </div>
                <div>
                    <a href="#" className="block rounded-sm bg-gray-300 shadow-sm shadow-indigo-100 bg-[#C6324E] text-white ">
                        <img src="img/sg_dl.png" className="h-36 w-full object-cover" />
                        <div className="mt-2 pb-8 px-4 pt-2">
                            <div className="font-bold">
                                Sài Gòn - Đà Lạt
                            </div>
                            <div className="my-1 text-xs flex items-center">
                                Từ 240,000đ
                                <span className="ml-4 text-xs line-through text-gray-400">
                                    130.000đ
                                </span>

                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <Link to={`/detail`} className="block rounded-sm bg-gray-300 shadow-sm shadow-indigo-100 bg-[#4C6C8C] text-white ">
                        <img src="img/sai_gon.png" className="h-36 w-full object-cover" />
                        <div className="mt-2 pb-8 px-4 pt-2">
                            <div className="font-bold">
                                Sài Gòn - Phan Thiết
                            </div>
                            <div className="my-1 text-xs flex items-center">
                                Từ 240,000đ
                                <span className="ml-4 text-xs line-through text-gray-400">
                                    130.000đ
                                </span>

                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
     
    )
}

export default Content