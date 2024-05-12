import { useState } from "react"
import { AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { BsArrowLeftShort, BsPerson, BsReverseLayoutTextSidebarReverse } from "react-icons/bs"
import { FaRegImages, FaShopify } from "react-icons/fa";
import { RiArrowDropDownLine, RiDashboardFill } from "react-icons/ri";
import useFetchCategories from "../hooks/useCategoriesApi";
import { useCreateProduct } from "../hooks/useProductsApi";
import { Button, Select, SelectItem } from "@tremor/react";

const AdminDashboard = () => {
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const Menus = [
      {title: "Dashboard"},
      {title: "Pages", icon: <AiOutlineFileText/>},
      {title: "Media", spacing: true, icon: <FaRegImages/>},
      {
        title: "Projects", 
        icon: <BsReverseLayoutTextSidebarReverse/>,
        submenu: true,
        subMenuItems: [
          {title: "Submenu 1"},
          {title: "Submenu 2"},
          {title: "Submenu 3"},
        ],
      },
      {title: "Analytics", icon: <AiOutlineBarChart/>},
      {title: "Inbox",icon: <AiOutlineMail/>}, 
      {title: "Profile", spacing: true, icon: <BsPerson/>},
      {title: "Setting", icon: <AiOutlineSetting/>},
      {title: "Logout", icon: <AiOutlineLogout/>},
    ]

    const [category, setCategory] = useState("");
  const [createData, setCreateData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });
  const { data: Categories, isLoading } = useFetchCategories();
  const createProductMutation = useCreateProduct();

  if (isLoading) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = { ...createData, price: Number(createData.price), category };
    createProductMutation.mutate(data);
  };
  
  return (
    <div className="flex">
        <div className={`bg-slate-500 text-slate-200 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
            <BsArrowLeftShort onClick={() => setOpen(!open)} className={`bg-white text-slate-500 text-3xl rounded-full absolute -right-3 top-9 border border-slate-500 cursor-pointer ${!open && "rotate-180"}`} />

            <div className="inline-flex">
              <FaShopify className={`bg-black text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
              <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Autumn Shopping</h1>
            </div>

            <ul className="pt-11">
              {Menus.map((menu, index) => (
                <div>
                  <li key={index} className={`text-slate-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-400 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                    <span className="text-2xl block float-left">{menu.icon ? menu.icon : <RiDashboardFill/>}</span>
                    <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>{menu.title}</span>
                    {menu.submenu && open && (
                      <RiArrowDropDownLine className={`${subMenuOpen && "rotate-180"}`} onClick={() => {setSubMenuOpen(!subMenuOpen)}}/>
                    )}
                  </li>

                 {menu.submenu && subMenuOpen && open && (
                    <ul>
                      {menu.subMenuItems?.map((submenuItem, index) => (
                        <li key={index} className="text-slate-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-400 rounded-md">{submenuItem.title}</li>
                      ))}
                  </ul>
                 )}     
                
                </div>
              ))}
            </ul>
        </div>

        <div className="p-7 flex">
            <form onSubmit={handleSubmit}>
              <h1 className="font-semibold text-2xl">Add New Items</h1>
              <input type="text" placeholder="enter title" value={createData.title}
                onChange={(e) =>
                  setCreateData((prev) => ({ ...prev, title: e.target.value }))}
                  className="flex bg-slate-100 p-[7.5px] border-none rounded-md mt-4 font-light" />

              <input type="text" placeholder="enter price"  value={createData.price}
                      onChange={(e) =>
                        setCreateData((prev) => ({ ...prev, price: e.target.value }))
                      } 
                      className="flex bg-slate-100 p-[7.5px] border-none rounded-md mt-4 font-light" />

              <textarea value={createData.description}
                        onChange={(e) =>
                          setCreateData((prev) => ({ ...prev, description: e.target.value }))
                        }
                        id="description"
                        placeholder="description"
                        rows={6}
                        className="flex bg-slate-100 p-[7.5px] border-none rounded-md mt-4 font-light"/>

              <input type="text" placeholder="enter image url" value={createData.image}
                      onChange={(e) =>
                        setCreateData((prev) => ({ ...prev, image: e.target.value }))
                      } 
                      className="flex bg-slate-100 p-[7.5px] border-none rounded-md mt-4 font-light" />

              <Select
                id="distance"
                name="distance"
                value={category}
                onValueChange={setCategory}
                className="mt-2"
              >
                {Categories?.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </Select>
              <Button loading={createProductMutation.isPending} type="submit" className="bg-blue-500 flex items-center justify-center text-white p-2 rounded-md my-11">
                Add
              </Button>
              {/* <button loading={createProductMutation.isPending} type="submit" className="bg-blue-500 flex items-center justify-center text-white p-2 rounded-md my-3">Add New Item</button> */}
            </form>
        </div>
    </div>
  )
}

export default AdminDashboard