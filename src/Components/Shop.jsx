
import React, { useEffect } from 'react';
import Card from '../Cards/Card.jsx';
import { useState } from "react"
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Shop() {

  const data = useLoaderData();
  const [alldata, setAlldata] = useState([]);
  const [text, setText] = useState([]);
  const [searchFlower, setSearchFlower] = useState([]);
  const [sortbyPrice, setSortbyprice] = useState([]);
  const [isSort, setIsSort] = useState(false);


  useEffect(() => {
    setAlldata(data);
  }, [sortbyPrice])


  const hangleOnchangeInput = (e) => {

    setText(e.target.value)
  }

  const HandleTosearch = () => {
    if (text == undefined || null) {
      return
    }
    else if (text == "all" || text == "ALL" || text == "All b") {

      setSearchFlower(alldata);

    }
    else if (text == 'red rose' || text == 'Red rose' || text == 'Red Rose') {
      let redrose = alldata.filter(item => item.flower_name == 'Red Rose')

      setSearchFlower(redrose);
    }
    else if (text == 'rose' || text == 'white rose' || text == 'White rose' || text == "White Rose") {
      let rose = alldata.filter(item => item.flower_name == 'White Rose')

      setSearchFlower(rose);
    }

    else if (text == "Tulip" || text === "tulip" || text == "TULIP") {
      let Tulip = alldata.filter(item => item.flower_name == 'Tulip')
      setSearchFlower(Tulip)


    }
    else if (text == "Daisy" || text === "daisy" || text == "DAISY") {
      let Daisy = alldata.filter(item => item.flower_name == 'Daisy')
      setSearchFlower(Daisy)


    }
    else if (text == "lily" || text === "Lily" || text == "LILY") {
      let Lily = alldata.filter(item => item.flower_name == 'Lily')
      setSearchFlower(Lily)


    }
    else if (text == "sunflower" || text === "Sunflower" || text == "SunFlower") {
      let sunflower = alldata.filter(item => item.flower_name == 'Sunflower')
      setSearchFlower(sunflower)


    }
    else if (text == "Carnation" || text === "carnation" || text == "Carnation") {
      let Carnation = alldata.filter(item => item.flower_name == 'Carnation')
      setSearchFlower(Carnation)


    }
    else if (text == "Orchid" || text === "orchid" || text == "Orchid") {
      let Orchid = alldata.filter(item => item.flower_name == 'Orchid')
      setSearchFlower(Orchid)


    }

    else {
      toast.warn('not found this flower', {
        autoClose: 1500,
        position: 'top-center',
        hideProgressBar: true,


      })


    }

    document.getElementById('searchBar').value = '';
  }
  const handleTosortbyPrice = () => {
    setIsSort(!isSort);
    if (!isSort) {
      let sortprice = alldata.sort(compere);
      setAlldata(sortprice)
      setSortbyprice(sortprice);
    }
    else {
      let sortprice = alldata.sort(compere2);
      setAlldata(sortprice);
      setSortbyprice(sortprice);
    }

  }
  const compere2 = (a, b) => {
    return b.flower_price - a.flower_price;

  }
  const compere = (a, b) => {
    return a.flower_price - b.flower_price;

  }
  const handleTorefresh = () => {

    setAlldata(data);
    setSearchFlower(data)
  }


  return (
    <>

      <div className=' w-full min-h-screen '>
        {/* --search-bar-- */}

        <div className='flex items-center justify-between py-4 bg-[#FFF] shadow-xl z-50 px-4 rounded-lg border-[1px]'>

          <div className='md:block hidden'>
            <button onClick={handleTosortbyPrice} className='hover:text-[#FF8F52]'><i className="fa-solid fa-filter"></i> Filtering</button>
          </div>

          <div className='border-[1px] border-[#D9D9D9] md:w-[40%] w-full h-12 rounded-lg flex pl-1'>
            <input id='searchBar' onChange={hangleOnchangeInput} className='xl:w-[90%] md:w-[80%] w-[85%] h-full outline-none border-none placeholder:text-[#adadad] placeholder:font-semibold font-medium text-[#000]' type="text" name="search" placeholder='Search by flower name.....' />
            <button onClick={HandleTosearch} className='bg-[#D9D9D9] xl:w-[10%] w-[15%] md:w-[20%] text-xl'><i className="fa-solid fa-magnifying-glass"></i></button>

          </div>

          <div className='md:block hidden'>
            <button onClick={handleTorefresh} className='hover:text-[#FF8F52]'><i className="fa-solid fa-arrow-down"></i> refresh</button>
          </div>
        </div>

        <br />

        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5'>
          {
            searchFlower.length ? searchFlower?.map((data, index) => <Card key={index} data={data} />) : alldata?.map((data, index) => <Card key={index} data={data} />)


          }
        </div>
        <ToastContainer />
      </div>




    </>
  )
}

export default Shop