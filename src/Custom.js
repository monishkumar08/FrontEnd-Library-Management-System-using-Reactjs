import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import './style.css'
import Header from './Header';
import videobook from './video.mp4';
import './Axios';
import "react-datepicker/dist/react-datepicker.css";

class Custom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          offset: 0,
          reducedData: [],
          results: [],
          perPage: 10,
          currentPage: 0,
          errorMessage: " ",
          criteria:"All",
          criteriaString:"",
          orignalresults:[],
          count:0,
          newBook: {
            Title: "",
            Author: "",
            Subject: "",
            Publishdate: ""
          }
        };
    
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
        this.handleReset=this.handleReset.bind(this);
        

    }

    handleSelect(e)
    {
      this.setState({criteria:e.target.value},()=>{
        console.log(this.state.criteria+"TTTT")
        if(this.state.criteria==="All")
        {
            console.log("Calling");
            this.getData();
        }
      }
      )
     
    }

    handleChange(e) {
      this.setState({ criteriaString: e.target.value }, () => {
        console.log(this.state.criteriaString);
    
        let criteriaString = e.target.value;
        // Split the input value by space
        const words = criteriaString.split(" ");
        // Capitalize the first letter of each word
        words.forEach((word, index) => {
          words[index] = word.charAt(0).toUpperCase() + word.slice(1);
        });
        // Join the words back to form the input value
        criteriaString = words.join(" ");
    
        this.setState({ criteriaString });
    
        if (this.state.criteria === "All" || this.state.criteriaString === "") {
          // If criteria is "All" or criteriaString is empty, reset the filters
          this.setState(
            {
              criteria: "All",
              criteriaString: "",
            },
            () => {
              document.getElementById("dropdown").value = "All";
              this.getData();
            }
          );
        }
        

        
        else {
          // Apply filters based on selected criteria
          const filteredData = this.state.originalresults.filter((product) =>
            product[this.state.criteria].includes(this.state.criteriaString)
          );
          this.setState(
            {
              count: filteredData.length,
            },
            () => {
              this.getData1(filteredData);
            }
          );
        }
      });
    }
           
        

    handleReset() {
      this.setState({
        criteria: "All",
        criteriaString: ""
      }, () => {
        document.getElementById("dropdown").value = "All";
        this.getData();
      });
    }

    
  

    getData1(filt)
    {

      var res1=filt;
      console.log("monish"+JSON.stringify(res1))
      var data = res1;

      this.setState({offset:0})

      var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

      this.setState({

        pageCount: Math.ceil(data.length / this.state.perPage),
        results: res1,
        reducedData: slice
      }
      )
    }




    componentDidMount() {
      this.getData()
    }


    getData() {

          var res1=require("./books.json")
          console.log(res1)

          var data = res1;
          this.setState({count:res1.length})
          var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
  
          this.setState({
  
            pageCount: Math.ceil(data.length / this.state.perPage),
            results: res1,
            reducedData: slice,
            originalresults:res1
          }
          )
  
        
    }
  
    loadMoreData() 
    {
      const data = this.state.results;
      const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        reducedData: slice
      })
    }

    handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;
  
      this.setState({
        currentPage: selectedPage,
        offset: offset
      }, () => {
        this.loadMoreData()
      });
  
    };


    render() {
      const localName = localStorage.getItem("name");

      return (
        <div id='body'>
        <Header />


        <div className='bg-videobox'>
          <video className='videoTag' autoPlay loop muted>
            <source src={videobook} type='video/webm' />
          </video>


          <h3 style={{fontSize:'33px' ,color: '#fff', textShadow: '0px 2px 4px red', fontFamily: '"Helvetica Neue", Arial, sans-serif', margin: '0' }}>Hello {localName}, Welcome back!</h3>
          <br></br>
          <div style={{textAlign:'center', background: 'white', padding: '20px', border: '3px solid black', width: 'auto' }}>
            <h1 style={{ fontSize: '48px', color: '#fff', textShadow: '0px 2px 4px red', fontFamily: '"Helvetica Neue", Arial, sans-serif', margin: '0' }}>Simple Library Management System</h1>
          </div>
  
          <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
  <span style={{ marginRight: '10px', fontSize: '18px', fontWeight: 'bold', color: 'black' }}>Filtering Criteria</span>
  <select id='dropdown' name="monish" onChange={this.handleSelect} style={{ backgroundColor: '#f8f9fa', padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}>
    <option value="All" selected>All</option>
    <option value="Title"> Title</option>
    <option value="Author">Author</option>
    <option value="Subject">Subject</option>
    <option value="Publishdate" >Publishdate</option>
  </select>
  {this.state.criteria === "Publishdate" ? (
        <input type="date" placeholder="please select the criteria in dropdown" onChange={this.handleChange} value={this.state.criteriaString} style={{ width:'100%',backgroundColor: '#f8f9fa', padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid black' }} />

  ) : (
    <input type="text" placeholder="please select the criteria in dropdown" onChange={this.handleChange} value={this.state.criteriaString} style={{ width:'100%',backgroundColor: '#f8f9fa', padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid black' }} />
  )}

          

            <button onClick={this.handleReset} style={{ backgroundColor: ' #ef9191f2;', color: ' #ef9191f2', padding: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Reset</button>
  </div>
          <br/>
          <br/>


          <div style={{ display: 'flex', justifyContent: 'center' }}>
  <table border={4} style={{ width: 'auto', maxWidth: '1000px', borderCollapse: 'collapse', borderColor: 'black' }}>
    <tr style={{ backgroundColor: 'black', fontWeight: 'bold', color: 'white' }}>
      <td style={{ padding: '10px' ,textTransform: 'uppercase'}}>isbn</td>
      <td style={{ padding: '10px' ,textTransform: 'uppercase'}}>Title</td>
      <td style={{ padding: '10px' ,textTransform: 'uppercase'}}>Author</td>
      <td style={{ padding: '10px' ,textTransform: 'uppercase'}}>Subject</td>
      <td style={{ padding: '10px' ,textTransform: 'uppercase'}}>Publishdate</td>
    </tr>


              {  console.log(this.state.criteria+"---"+this.state.criteriaString)}
               {this.state.reducedData.length 
              ? this.state.reducedData.map((product) => (
              

                
                    <tr key={product.ISBN}>
                      <td>  {product.ISBN} </td>
                      <td>  {product.Title} </td>
                      <td>  {product.Author} </td>
                      <td>  {product.Subject} </td>
                      <td>  {product.Publishdate} </td>
                    </tr>
                 
                
              ))
              : null}
              </table></div>
              </div>
              
            {this.state.errorMessage ? <div> {this.state.errorMessage}</div> : null}
         
         <h1> Number of Entries Matching the Criteria - {this.state.criteria} on {this.state.criteriaString} is: {this.state.count}</h1>
          
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerC667lassName={"pages pagination"}
            activeClassName={"active"}
            previousClassName={"prev"}
            nextClassName={"next"}
  
          />
        </div>
 
  
      )
    }
}

export default Custom;