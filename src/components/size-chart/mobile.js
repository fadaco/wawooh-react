import React from 'react'
import Layout from '../ui/Layout';
import styled from "styled-components";


export default (props) => {
    const DIV = styled.div`
    padding: 5px;
    h2{
        text-align: center;
    }
    .table-responsive{
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
    .table{
        width: 100%;
        margin-bottom: 100px;
    }
    .btn-fill{
        background-color: #cd9933;
        color: white;
    }
    .btn{
        padding: 5px;
        width: 50px;
        border: transparent;
    }
    thead{
        background-color: #cd9933;
    }
    th{
        padding: 10px; 
        border-bottom: 2px solid #dee2e6;
    }
    td{
        text-align: center;
        padding: 10px;
        border-top: 1px solid #dee2e6;
    }
    .table-striped tbody tr:nth-of-type(odd) {
        background-color: rgba(0,0,0,.05);
    }
    .s-cm{
        display: ${props.centimeter};
    }
    .s-inch{
        display: ${props.inch};
    }
    
`

const fillButton = (fillType) => fillType === 'block' 
    ? "btn btn-afk btn-fill"
    : "btn btn-afk";

    return (
        <Layout>
            <DIV>
                <div className="newSize">
                    <div>
                        <h2 >Woman - Tops and dresses</h2>
                        <br />
                        <div style={{ marginBottom: 20 }}>
                            <div className="size-unit-selector btn-group btn-group-sm" role="group">
                                <button onClick={props.onInchesClick} type="button" className={fillButton(props.inch)} data-unit="in" data-text="in" >IN</button>
                                <button onClick={props.onCmClick} type="button" className={fillButton(props.centimeter)} data-unit="cm" data-text="cm" >CM</button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>Int</th>
                                        <th>Chest <span className="size-unit"><span className="s-inch">in</span><span className="s-cm">cm</span></span></th>
                                        <th>Waist <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                        <th>Hip <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                        <th>EU</th>
                                        <th>UK</th>
                                        <th>US</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ><strong>XXS</strong></td>
                                        <td ><span className="s-inch">30.7" - 32.3"</span><span className="s-cm ">78 - 82</span></td>
                                        <td ><span className="s-inch">22.8" - 24.4"</span><span className="s-cm ">58 - 62</span></td>
                                        <td ><span className="s-inch">33.1" - 34.6"</span><span className="s-cm ">84 - 88</span></td>
                                        <td >32</td>
                                        <td >4</td>
                                        <td >0</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XS</strong></td>
                                        <td ><span className="s-inch">32.3" - 33.9"</span><span className="s-cm ">82 - 86</span></td>
                                        <td ><span className="s-inch">24.4" - 26"</span><span className="s-cm ">62 - 66</span></td>
                                        <td ><span className="s-inch">34.6" - 36.2"</span><span className="s-cm ">88 - 92</span></td>
                                        <td >34</td>
                                        <td >6</td>
                                        <td >2</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>S</strong></td>
                                        <td ><span className="s-inch">33.9" - 35.4"</span><span className="s-cm ">86 - 90</span></td>
                                        <td ><span className="s-inch">26" - 27.6"</span><span className="s-cm ">66 - 70</span></td>
                                        <td ><span className="s-inch">36.2" - 37.8"</span><span className="s-cm ">92 - 96</span></td>
                                        <td >36</td>
                                        <td >8</td>
                                        <td >4</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>M</strong></td>
                                        <td ><span className="s-inch">35.4" - 37"</span><span className="s-cm ">90 - 94</span></td>
                                        <td ><span className="s-inch">27.6" - 29.1"</span><span className="s-cm ">70 - 74</span></td>
                                        <td ><span className="s-inch">37.8" - 39.4"</span><span className="s-cm ">96 - 100</span></td>
                                        <td >38</td>
                                        <td >10</td>
                                        <td >6</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>L</strong></td>
                                        <td ><span className="s-inch">37" - 38.6"</span><span className="s-cm ">94 - 98</span></td>
                                        <td ><span className="s-inch">29.1" - 30.7"</span><span className="s-cm ">74 - 78</span></td>
                                        <td ><span className="s-inch">39.4" - 40.9"</span><span className="s-cm ">100 - 104</span></td>
                                        <td >40</td>
                                        <td >12</td>
                                        <td >8</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XL</strong></td>
                                        <td ><span className="s-inch">38.6" - 40.2"</span><span className="s-cm ">98 - 102</span></td>
                                        <td ><span className="s-inch">30.7" - 32.3"</span><span className="s-cm ">78 - 82</span></td>
                                        <td ><span className="s-inch">40.9" - 42.5"</span><span className="s-cm ">104 - 108</span></td>
                                        <td >42</td>
                                        <td >14</td>
                                        <td >10</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XXL</strong></td>
                                        <td ><span className="s-inch">40.2" - 41.7"</span><span className="s-cm ">102 - 106</span></td>
                                        <td ><span className="s-inch">32.3" - 33.9"</span><span className="s-cm ">82 - 86</span></td>
                                        <td ><span className="s-inch">42.5" - 44.1"</span><span className="s-cm ">108 - 112</span></td>
                                        <td >44</td>
                                        <td >16</td>
                                        <td >12</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>3XL</strong></td>
                                        <td ><span className="s-inch">41.7" - 43.3"</span><span className="s-cm ">106 - 110</span></td>
                                        <td ><span className="s-inch">33.9" - 35.4"</span><span className="s-cm ">86 - 90</span></td>
                                        <td ><span className="s-inch">44.1" - 45.7"</span><span className="s-cm ">112 - 116</span></td>
                                        <td >46</td>
                                        <td >18</td>
                                        <td >14</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>4XL</strong></td>
                                        <td ><span className="s-inch">43.3" - 45.7"</span><span className="s-cm ">110 - 116</span></td>
                                        <td ><span className="s-inch">35.4" - 38.6"</span><span className="s-cm ">90 - 98</span></td>
                                        <td ><span className="s-inch">45.7" - 48"</span><span className="s-cm ">116 - 122</span></td>
                                        <td >48</td>
                                        <td >20</td>
                                        <td >16</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>5XL</strong></td>
                                        <td ><span className="s-inch">45.7" - 48"</span><span className="s-cm ">116 - 122</span></td>
                                        <td ><span className="s-inch">38.6" - 41.7"</span><span className="s-cm ">98 - 106</span></td>
                                        <td ><span className="s-inch">48" - 50.4"</span><span className="s-cm ">122 - 128</span></td>
                                        <td >50</td>
                                        <td >22</td>
                                        <td >18</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>6XL</strong></td>
                                        <td ><span className="s-inch">48" - 50.4"</span><span className="s-cm ">122 - 128</span></td>
                                        <td ><span className="s-inch">41.7" - 44.9"</span><span className="s-cm ">106 - 114</span></td>
                                        <td ><span className="s-inch">50.4" - 52.8"</span><span className="s-cm ">128 - 134</span></td>
                                        <td >52</td>
                                        <td >24</td>
                                        <td >20</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>7XL</strong></td>
                                        <td ><span className="s-inch">50.4" - 52.8"</span><span className="s-cm ">128 - 134</span></td>
                                        <td ><span className="s-inch">44.9" - 48"</span><span className="s-cm ">114 - 122</span></td>
                                        <td ><span className="s-inch">52.8" - 55.1"</span><span className="s-cm ">134 - 140</span></td>
                                        <td >54</td>
                                        <td >26</td>
                                        <td >22</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>Woman - Pants, Skirts and Shorts</h2>
                        <br />
                        <div style={{ marginBottom: 20 }}>
                            <div className="size-unit-selector btn-group btn-group-sm" role="group">
                                <button onClick={props.onInchesClick} type="button" className={fillButton(props.inch)} >IN</button>
                                <button onClick={props.onCmClick} type="button" className={fillButton(props.centimeter)} >CM</button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>Int</th>
                                        <th>Waist <span className="size-unit"><span className="s-inch">in</span><span className="s-cm">cm</span></span></th>
                                        <th>EU</th>
                                        <th>UK</th>
                                        <th>US</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ><strong>XXS</strong></td>
                                        <td ><span className="s-inch">22.8" - 24.4"</span><span className="s-cm ">58 - 62</span></td>
                                        <td >32</td>
                                        <td >4</td>
                                        <td >0</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XS</strong></td>
                                        <td ><span className="s-inch">24.4" - 26"</span><span className="s-cm ">62 - 66</span></td>
                                        <td >34</td>
                                        <td >6</td>
                                        <td >2</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>S</strong></td>
                                        <td ><span className="s-inch">26" - 27.6"</span><span className="s-cm ">66 - 70</span></td>
                                        <td >36</td>
                                        <td >8</td>
                                        <td >4</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>M</strong></td>
                                        <td ><span className="s-inch">27.6" - 29.1"</span><span className="s-cm ">70 - 74</span></td>
                                        <td >38</td>
                                        <td >10</td>
                                        <td >6</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>L</strong></td>
                                        <td ><span className="s-inch">29.1" - 30.7"</span><span className="s-cm ">74 - 78</span></td>
                                        <td >40</td>
                                        <td >12</td>
                                        <td >8</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XL</strong></td>
                                        <td ><span className="s-inch">30.7" - 32.3"</span><span className="s-cm ">78 - 82</span></td>
                                        <td >42</td>
                                        <td >14</td>
                                        <td >10</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XXL</strong></td>
                                        <td ><span className="s-inch">32.3" - 33.9"</span><span className="s-cm ">82 - 86</span></td>
                                        <td >44</td>
                                        <td >16</td>
                                        <td >12</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>3XL</strong></td>
                                        <td ><span className="s-inch">33.9" - 35.4"</span><span className="s-cm ">86 - 90</span></td>
                                        <td >46</td>
                                        <td >18</td>
                                        <td >14</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>4XL</strong></td>
                                        <td ><span className="s-inch">35.4" - 38.6"</span><span className="s-cm ">90 - 98</span></td>
                                        <td >48</td>
                                        <td >20</td>
                                        <td >16</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>5XL</strong></td>
                                        <td ><span className="s-inch">38.6" - 41.7"</span><span className="s-cm ">98 - 106</span></td>
                                        <td >50</td>
                                        <td >22</td>
                                        <td >18</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>6XL</strong></td>
                                        <td ><span className="s-inch">41.7" - 44.9"</span><span className="s-cm ">106 - 114</span></td>
                                        <td >52</td>
                                        <td >24</td>
                                        <td >20</td>
                                    </tr>
                                    <tr>
                                        <td ><strong>7XL</strong></td>
                                        <td ><span className="s-inch">44.9" - 48"</span><span className="s-cm ">114 - 122</span></td>
                                        <td >54</td>
                                        <td >26</td>
                                        <td >22</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div>
                        <h2>Man - Shirts</h2>
                        <br />
                        <div style={{ marginBottom: 20 }}>
                            <div className="size-unit-selector btn-group btn-group-sm" role="group">
                                <button type="button" className={fillButton(props.inch)} onClick={props.onInchesClick} >IN</button>
                                <button type="button" className={fillButton(props.centimeter)} onClick={props.onCmClick}>CM</button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>Int</th>
                                        <th>Chest <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                        <th>Neckband <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ><strong>XXS</strong></td>
                                        <td ><span className="s-inch">32"-34"</span><span className="s-cm ">81-86</span></td>
                                        <td ><span className="s-inch">14"</span><span className="s-cm ">36</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XS</strong></td>
                                        <td ><span className="s-inch">34"-36"</span><span className="s-cm ">86-91</span></td>
                                        <td ><span className="s-inch">14.5"</span><span className="s-cm ">37</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>S</strong></td>
                                        <td ><span className="s-inch">36"-38"</span><span className="s-cm ">91-96</span></td>
                                        <td ><span className="s-inch">15"</span><span className="s-cm ">38</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>M</strong></td>
                                        <td ><span className="s-inch">38"-40"</span><span className="s-cm ">96-101</span></td>
                                        <td ><span className="s-inch">16"</span><span className="s-cm ">41</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>L</strong></td>
                                        <td ><span className="s-inch">40"-42"</span><span className="s-cm ">101-106</span></td>
                                        <td ><span className="s-inch">17"</span><span className="s-cm ">43</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XL</strong></td>
                                        <td ><span className="s-inch">42"-44"</span><span className="s-cm ">106-111</span></td>
                                        <td ><span className="s-inch">17.5"</span><span className="s-cm ">44</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XXL</strong></td>
                                        <td ><span className="s-inch">44"-46"</span><span className="s-cm ">111-116</span></td>
                                        <td ><span className="s-inch">18"</span><span className="s-cm ">46</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>3XL</strong></td>
                                        <td ><span className="s-inch">46"-48"</span><span className="s-cm ">116 - 121</span></td>
                                        <td ><span className="s-inch">18.5"</span><span className="s-cm ">47</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h2>Man - T-shirts, polos, sweatshirts and jumpers</h2>
                        <br />
                        <div style={{ marginBottom: 20 }}>
                            <div className="size-unit-selector btn-group btn-group-sm" role="group">
                                <button onClick={props.onInchesClick} type="button" className={fillButton(props.inch)} >IN</button>
                                <button onClick={props.onCmClick} type="button" className={fillButton(props.centimeter)} >CM</button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>Int</th>
                                        <th>Chest <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ><strong>XXS</strong></td>
                                        <td ><span className="s-inch">32"-34"</span><span className="s-cm ">81-86</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XS</strong></td>
                                        <td ><span className="s-inch">34"-36"</span><span className="s-cm ">86-91</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>S</strong></td>
                                        <td ><span className="s-inch">36"-38"</span><span className="s-cm ">91-96</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>M</strong></td>
                                        <td ><span className="s-inch">38"-40"</span><span className="s-cm ">96-101</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>L</strong></td>
                                        <td ><span className="s-inch">40"-42"</span><span className="s-cm ">101-106</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XL</strong></td>
                                        <td ><span className="s-inch">42"-44"</span><span className="s-cm ">106-111</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XXL</strong></td>
                                        <td ><span className="s-inch">44"-46"</span><span className="s-cm ">111-116</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>3XL</strong></td>
                                        <td ><span className="s-inch">46"-48"</span><span className="s-cm ">116 - 121</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    


                        <h2>Man - Jackets, parkas and coats</h2>
                        <br />
                        <div style={{ marginBottom: 20 }}>
                            <div className="size-unit-selector btn-group btn-group-sm" role="group">
                                <button onClick={props.onInchesClick} type="button" className={fillButton(props.inch)} data-unit="in" data-text="in" >IN</button>
                                <button onClick={props.onCmClick} type="button" className={fillButton(props.centimeter)} data-unit="cm" data-text="cm" >CM</button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>Int</th>
                                        <th>Chest <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ><strong>XXS</strong></td>
                                        <td ><span className="s-inch">32"-34"</span><span className="s-cm ">81-86</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XS</strong></td>
                                        <td ><span className="s-inch">34"-36"</span><span className="s-cm ">86-91</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>S</strong></td>
                                        <td ><span className="s-inch">36"-38"</span><span className="s-cm ">91-96</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>M</strong></td>
                                        <td ><span className="s-inch">38"-40"</span><span className="s-cm ">96-101</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>L</strong></td>
                                        <td ><span className="s-inch">40"-42"</span><span className="s-cm ">101-106</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XL</strong></td>
                                        <td ><span className="s-inch">42"-44"</span><span className="s-cm ">106-111</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XXL</strong></td>
                                        <td ><span className="s-inch">44"-46"</span><span className="s-cm ">111-116</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>3XL</strong></td>
                                        <td ><span className="s-inch">46"-48"</span><span className="s-cm ">116 - 121</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>Man - Pants and shorts</h2>
                        <br />
                        <div style={{ marginBottom: 20 }}>
                            <div className="size-unit-selector btn-group btn-group-sm" role="group">
                                <button onClick={props.onInchesClick} type="button" className={fillButton(props.inch)}  >IN</button>
                                <button onClick={props.onCmClick} type="button" className={fillButton(props.centimeter)}   >CM</button>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>Int</th>
                                        <th>Waist <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                        <th>Height <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                        <th>Crotch <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ><strong>XXS</strong></td>
                                        <td ><span className="s-inch">26"-28"</span><span className="s-cm ">66-71</span></td>
                                        <td >Short</td>
                                        <td ><span className="s-inch">30"</span><span className="s-cm ">76</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XS</strong></td>
                                        <td ><span className="s-inch">28"-30"</span><span className="s-cm ">71-76</span></td>
                                        <td >Standard</td>
                                        <td ><span className="s-inch">32"</span><span className="s-cm ">81</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>S</strong></td>
                                        <td ><span className="s-inch">30"-32"</span><span className="s-cm ">76-81</span></td>
                                        <td >Long</td>
                                        <td ><span className="s-inch">34"</span><span className="s-cm ">86</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>M</strong></td>
                                        <td ><span className="s-inch">32"-34"</span><span className="s-cm ">81-86</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>L</strong></td>
                                        <td ><span className="s-inch">34"-36"</span><span className="s-cm ">86-91</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XL</strong></td>
                                        <td ><span className="s-inch">36"-38"</span><span className="s-cm ">91-96</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>XXL</strong></td>
                                        <td ><span className="s-inch">38"-40"</span><span className="s-cm ">96-101</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>3XL</strong></td>
                                        <td ><span className="s-inch">40"-42"</span><span className="s-cm ">101-106</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>4XL</strong></td>
                                        <td ><span className="s-inch">42"-44"</span><span className="s-cm ">106-111</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>5XL</strong></td>
                                        <td ><span className="s-inch">44"-46"</span><span className="s-cm ">111-116</span></td>
                                    </tr>
                                    <tr>
                                        <td ><strong>6XL</strong></td>
                                        <td ><span className="s-inch">46"-48"</span><span className="s-cm ">116-121</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h2>Kid - Baby</h2>
                        <br />
                        <div style={{ marginBottom: 20 }}>
                            <div className="size-unit-selector btn-group btn-group-sm" role="group">
                                <button onClick={props.onInchesClick} type="button" className={fillButton(props.inch)} >IN</button>
                                <button onClick={props.onCmClick} type="button" className={fillButton(props.centimeter)} >CM</button>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>Age</th>
                                        <th>Weight (kg)</th>
                                        <th>Height <span className="size-unit">in</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >Birth</td>
                                        <td >3,3</td>
                                        <td ><span className="s-inch">19.7"</span><span className="s-cm ">50</span></td>
                                    </tr>
                                    <tr>
                                        <td >1 month</td>
                                        <td >4</td>
                                        <td ><span className="s-inch">21.3"</span><span className="s-cm ">54</span></td>
                                    </tr>
                                    <tr>
                                        <td >3 months</td>
                                        <td >5 - 6</td>
                                        <td ><span className="s-inch">23.6"</span><span className="s-cm ">60</span></td>
                                    </tr>
                                    <tr>
                                        <td >6 months</td>
                                        <td >7 - 8</td>
                                        <td ><span className="s-inch">26.4"</span><span className="s-cm ">67</span></td>
                                    </tr>
                                    <tr>
                                        <td >9 months</td>
                                        <td >8 - 9</td>
                                        <td ><span className="s-inch">27.9"</span><span className="s-cm ">71</span></td>
                                    </tr>
                                    <tr>
                                        <td >12 months</td>
                                        <td >9 - 10</td>
                                        <td ><span className="s-inch">29.1"</span><span className="s-cm ">74</span></td>
                                    </tr>
                                    <tr>
                                        <td >18 months</td>
                                        <td >11</td>
                                        <td ><span className="s-inch">31.9"</span><span className="s-cm ">81</span></td>
                                    </tr>
                                    <tr>
                                        <td >24 months</td>
                                        <td >12</td>
                                        <td ><span className="s-inch">33.9"</span><span className="s-cm ">86</span></td>
                                    </tr>
                                    <tr>
                                        <td >36 months</td>
                                        <td >14</td>
                                        <td ><span className="s-inch">37"</span><span className="s-cm ">94</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>Kid - Girl</h2>
                        <br />
                        <div style={{ marginBottom: 20 }}>
                            <div className="size-unit-selector btn-group btn-group-sm" role="group">
                                <button onClick={props.onInchesClick} type="button" className={fillButton(props.inch)}>IN</button>
                                <button onClick={props.onCmClick} type="button" className={fillButton(props.centimeter)}  >CM</button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>Age</th>
                                        <th>Height <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                        <th>Chest <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                        <th>Waist <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                        <th>Hip <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >2 years</td>
                                        <td ><span className="s-inch">32.7" - 34.6"</span><span className="s-cm ">83 - 88</span></td>
                                        <td ><span className="s-inch">20.5"</span><span className="s-cm ">52</span></td>
                                        <td ><span className="s-inch">18.9"</span><span className="s-cm ">48</span></td>
                                        <td ><span className="s-inch">22"</span><span className="s-cm ">56</span></td>
                                    </tr>
                                    <tr>
                                        <td >3 years</td>
                                        <td ><span className="s-inch">34.7" - 37.8"</span><span className="s-cm ">88 - 96</span></td>
                                        <td ><span className="s-inch">21.3"</span><span className="s-cm ">54</span></td>
                                        <td ><span className="s-inch">19.7"</span><span className="s-cm ">50</span></td>
                                        <td ><span className="s-inch">22.8"</span><span className="s-cm ">58</span></td>
                                    </tr>
                                    <tr>
                                        <td >4 years</td>
                                        <td ><span className="s-inch">37.8" - 40.9"</span><span className="s-cm ">96 - 104</span></td>
                                        <td ><span className="s-inch">22"</span><span className="s-cm ">56</span></td>
                                        <td ><span className="s-inch">20.5"</span><span className="s-cm ">52</span></td>
                                        <td ><span className="s-inch">23.6"</span><span className="s-cm ">60</span></td>
                                    </tr>
                                    <tr>
                                        <td >5 years</td>
                                        <td ><span className="s-inch">40.9" - 43.3"</span><span className="s-cm ">104 - 110</span></td>
                                        <td ><span className="s-inch">22.8"</span><span className="s-cm ">58</span></td>
                                        <td ><span className="s-inch">20.9"</span><span className="s-cm ">53</span></td>
                                        <td ><span className="s-inch">24.4"</span><span className="s-cm ">62</span></td>
                                    </tr>
                                    <tr>
                                        <td >6 years</td>
                                        <td ><span className="s-inch">43.3" - 45.7"</span><span className="s-cm ">110 - 116</span></td>
                                        <td ><span className="s-inch">23.6"</span><span className="s-cm ">60</span></td>
                                        <td ><span className="s-inch">21.3"</span><span className="s-cm ">54</span></td>
                                        <td ><span className="s-inch">26"</span><span className="s-cm ">66</span></td>
                                    </tr>
                                    <tr>
                                        <td >7 years</td>
                                        <td ><span className="s-inch">45.7" - 48"</span><span className="s-cm ">116 - 122</span></td>
                                        <td ><span className="s-inch">24.4"</span><span className="s-cm ">62</span></td>
                                        <td ><span className="s-inch">21.6"</span><span className="s-cm ">55</span></td>
                                        <td ><span className="s-inch">26.8"</span><span className="s-cm ">68</span></td>
                                    </tr>
                                    <tr>
                                        <td >8 years</td>
                                        <td ><span className="s-inch">48" - 50.4"</span><span className="s-cm ">122 - 128</span></td>
                                        <td ><span className="s-inch">25.2"</span><span className="s-cm ">64</span></td>
                                        <td ><span className="s-inch">22"</span><span className="s-cm ">56</span></td>
                                        <td ><span className="s-inch">27.6"</span><span className="s-cm ">70</span></td>
                                    </tr>
                                    <tr>
                                        <td >9 years</td>
                                        <td ><span className="s-inch">50.4" - 52.8"</span><span className="s-cm ">128 - 134</span></td>
                                        <td ><span className="s-inch">26.4"</span><span className="s-cm ">67</span></td>
                                        <td ><span className="s-inch">22.4"</span><span className="s-cm ">57</span></td>
                                        <td ><span className="s-inch">28.7"</span><span className="s-cm ">73</span></td>
                                    </tr>
                                    <tr>
                                        <td >10 years</td>
                                        <td ><span className="s-inch">52.8" - 55.1"</span><span className="s-cm ">134 - 140</span></td>
                                        <td ><span className="s-inch">27.6"</span><span className="s-cm ">70</span></td>
                                        <td ><span className="s-inch">23.2"</span><span className="s-cm ">59</span></td>
                                        <td ><span className="s-inch">29.9"</span><span className="s-cm ">76</span></td>
                                    </tr>
                                    <tr>
                                        <td >12 years</td>
                                        <td ><span className="s-inch">55.1" - 59.8"</span><span className="s-cm ">140 - 152</span></td>
                                        <td ><span className="s-inch">30.7"</span><span className="s-cm ">78</span></td>
                                        <td ><span className="s-inch">24.4"</span><span className="s-cm ">62</span></td>
                                        <td ><span className="s-inch">33.1"</span><span className="s-cm ">84</span></td>
                                    </tr>
                                    <tr>
                                        <td >14 years</td>
                                        <td ><span className="s-inch">59.8" - 62.2"</span><span className="s-cm ">152 - 158</span></td>
                                        <td ><span className="s-inch">32.3"</span><span className="s-cm ">82</span></td>
                                        <td ><span className="s-inch">25.2"</span><span className="s-cm ">64</span></td>
                                        <td ><span className="s-inch">34.6"</span><span className="s-cm ">88</span></td>
                                    </tr>
                                    <tr>
                                        <td >16 years</td>
                                        <td ><span className="s-inch">62.2" - 64.6"</span><span className="s-cm ">158 - 164</span></td>
                                        <td ><span className="s-inch">33.9"</span><span className="s-cm ">86</span></td>
                                        <td ><span className="s-inch">26"</span><span className="s-cm ">66</span></td>
                                        <td ><span className="s-inch">36.2"</span><span className="s-cm ">92</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>Kid - Boy</h2>
                        <br />
                        <div style={{ marginBottom: 20 }}>
                            <div className="size-unit-selector btn-group btn-group-sm" role="group">
                                <button onClick={props.onInchesClick} type="button" className={fillButton(props.inch)} >IN</button>
                                <button onClick={props.onCmClick} type="button" className={fillButton(props.centimeter)}>CM</button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>Age</th>
                                        <th>Height <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                        <th>Chest <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                        <th>Waist <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                        <th>Hip <span className="size-unit"><span className="s-inch">in</span><span className="s-cm ">cm</span></span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >2 years</td>
                                        <td ><span className="s-inch">32.7" - 34.6"</span><span className="s-cm ">83 - 88</span></td>
                                        <td ><span className="s-inch">20.5"</span><span className="s-cm ">52</span></td>
                                        <td ><span className="s-inch">18.9"</span><span className="s-cm ">48</span></td>
                                        <td ><span className="s-inch">22"</span><span className="s-cm ">56</span></td>
                                    </tr>
                                    <tr>
                                        <td >3 years</td>
                                        <td ><span className="s-inch">34.6" - 37.8"</span><span className="s-cm ">88 - 96</span></td>
                                        <td ><span className="s-inch">21.3"</span><span className="s-cm ">54</span></td>
                                        <td ><span className="s-inch">19.7"</span><span className="s-cm ">50</span></td>
                                        <td ><span className="s-inch">22.8"</span><span className="s-cm ">58</span></td>
                                    </tr>
                                    <tr>
                                        <td >4 years</td>
                                        <td ><span className="s-inch">37.8" - 40.9"</span><span className="s-cm ">96 - 104</span></td>
                                        <td ><span className="s-inch">22"</span><span className="s-cm ">56</span></td>
                                        <td ><span className="s-inch">20.5"</span><span className="s-cm ">52</span></td>
                                        <td ><span className="s-inch">23.6"</span><span className="s-cm ">60</span></td>
                                    </tr>
                                    <tr>
                                        <td >5 years</td>
                                        <td ><span className="s-inch">40.9" - 43.3"</span><span className="s-cm ">104 - 110</span></td>
                                        <td ><span className="s-inch">22.8"</span><span className="s-cm ">58</span></td>
                                        <td ><span className="s-inch">20.9"</span><span className="s-cm ">53</span></td>
                                        <td ><span className="s-inch">24.4"</span><span className="s-cm ">62</span></td>
                                    </tr>
                                    <tr>
                                        <td >6 years</td>
                                        <td ><span className="s-inch">43.3" - 45.7"</span><span className="s-cm ">110 - 116</span></td>
                                        <td ><span className="s-inch">23.6"</span><span className="s-cm ">60</span></td>
                                        <td ><span className="s-inch">21.3"</span><span className="s-cm ">54</span></td>
                                        <td ><span className="s-inch">24.4"</span><span className="s-cm ">62</span></td>
                                    </tr>
                                    <tr>
                                        <td >7 years</td>
                                        <td ><span className="s-inch">45.7" - 48"</span><span className="s-cm ">116 - 122</span></td>
                                        <td ><span className="s-inch">24.4"</span><span className="s-cm ">62</span></td>
                                        <td ><span className="s-inch">21.6"</span><span className="s-cm ">55</span></td>
                                        <td ><span className="s-inch">25.2"</span><span className="s-cm ">64</span></td>
                                    </tr>
                                    <tr>
                                        <td >8 years</td>
                                        <td ><span className="s-inch">48" - 50.4"</span><span className="s-cm ">122 - 128</span></td>
                                        <td ><span className="s-inch">25.2"</span><span className="s-cm ">64</span></td>
                                        <td ><span className="s-inch">22"</span><span className="s-cm ">56</span></td>
                                        <td ><span className="s-inch">26"</span><span className="s-cm ">66</span></td>
                                    </tr>
                                    <tr>
                                        <td >9 years</td>
                                        <td ><span className="s-inch">50.4" - 52.8"</span><span className="s-cm ">128 - 134</span></td>
                                        <td ><span className="s-inch">26.4"</span><span className="s-cm ">67</span></td>
                                        <td ><span className="s-inch">22.4"</span><span className="s-cm ">57</span></td>
                                        <td ><span className="s-inch">27.2"</span><span className="s-cm ">69</span></td>
                                    </tr>
                                    <tr>
                                        <td >10 years</td>
                                        <td ><span className="s-inch">52.8" - 55.1"</span><span className="s-cm ">134 - 140</span></td>
                                        <td ><span className="s-inch">26.8"</span><span className="s-cm ">68</span></td>
                                        <td ><span className="s-inch">23.2"</span><span className="s-cm ">59</span></td>
                                        <td ><span className="s-inch">28.3"</span><span className="s-cm ">72</span></td>
                                    </tr>
                                    <tr>
                                        <td >12 years</td>
                                        <td ><span className="s-inch">55.1" - 59.8"</span><span className="s-cm ">140 - 152</span></td>
                                        <td ><span className="s-inch">29.5"</span><span className="s-cm ">75</span></td>
                                        <td ><span className="s-inch">26"</span><span className="s-cm ">66</span></td>
                                        <td ><span className="s-inch">30.7"</span><span className="s-cm ">78</span></td>
                                    </tr>
                                    <tr>
                                        <td >14 years</td>
                                        <td ><span className="s-inch">59.8" - 64.6"</span><span className="s-cm ">152 - 164</span></td>
                                        <td ><span className="s-inch">32.3"</span><span className="s-cm ">82</span></td>
                                        <td ><span className="s-inch">27.6"</span><span className="s-cm ">70</span></td>
                                        <td ><span className="s-inch">33.9"</span><span className="s-cm ">86</span></td>
                                    </tr>
                                    <tr>
                                        <td >16 years</td>
                                        <td ><span className="s-inch">64.6" - 69.3"</span><span className="s-cm ">164 - 176</span></td>
                                        <td ><span className="s-inch">35"</span><span className="s-cm ">89</span></td>
                                        <td ><span className="s-inch">29.1"</span><span className="s-cm ">74</span></td>
                                        <td ><span className="s-inch">36.2"</span><span className="s-cm ">92</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h2>Adult - Shoes</h2>
                        <br />
                        <div style={{ marginBottom: 20 }}>
                            <div className="size-unit-selector btn-group btn-group-sm" role="group">
                                <button onClick={props.onInchesClick} type="button" className={fillButton(props.inch)} >IN</button>
                                <button onClick={props.onCmClick} type="button" className={fillButton(props.centimeter)} >CM</button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>EU</th>
                                        <th>UK</th>
                                        <th>US Women</th>
                                        <th>US Men</th>
                                        <th>
                                            <span className="size-unit">
                                                <span className="s-inch">in</span>
                                                <span className="s-cm ">cm</span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >36</td>
                                        <td >3.5</td>
                                        <td >4</td>
                                        <td >5</td>
                                        <td >
                                            <span className="s-inch">8.7"</span>
                                            <span className="s-cm ">22.1</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >37</td>
                                        <td >4.5</td>
                                        <td >5</td>
                                        <td >6</td>
                                        <td >
                                            <span className="s-inch">9"</span>
                                            <span className="s-cm ">22.9</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >38</td>
                                        <td >5</td>
                                        <td >5.5</td>
                                        <td >6.5</td>
                                        <td >
                                            <span className="s-inch">9.2"</span>
                                            <span className="s-cm ">23.3</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >39</td>
                                        <td >6</td>
                                        <td >6.5</td>
                                        <td >7.5</td>
                                        <td >
                                            <span className="s-inch">9.5"</span>
                                            <span className="s-cm ">24.2</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >40</td>
                                        <td >6.5</td>
                                        <td >7</td>
                                        <td >8</td>
                                        <td >
                                            <span className="s-inch">9.7"</span>
                                            <span className="s-cm ">24.6</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >41</td>
                                        <td >7.5</td>
                                        <td >8</td>
                                        <td >9</td>
                                        <td >
                                            <span className="s-inch">10"</span>
                                            <span className="s-cm ">25.5</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >42</td>
                                        <td >8</td>
                                        <td >8.5</td>
                                        <td >9.5</td>
                                        <td >
                                            <span className="s-inch">10.2"</span>
                                            <span className="s-cm ">25.9</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >43</td>
                                        <td >9</td>
                                        <td >9.5</td>
                                        <td >10.5</td>
                                        <td >
                                            <span className="s-inch">10.5"</span>
                                            <span className="s-cm ">26.7</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >44</td>
                                        <td >9.5</td>
                                        <td >10</td>
                                        <td >11</td>
                                        <td >
                                            <span className="s-inch">10.7"</span>
                                            <span className="s-cm ">27.1</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >45</td>
                                        <td >10.5</td>
                                        <td >11</td>
                                        <td >12</td>
                                        <td >
                                            <span className="s-inch">11"</span>
                                            <span className="s-cm ">28</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >46</td>
                                        <td >11</td>
                                        <td >11.5</td>
                                        <td >12.5</td>
                                        <td >
                                            <span className="s-inch">11.2"</span>
                                            <span className="s-cm ">28.4</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >47</td>
                                        <td >12</td>
                                        <td >12.5</td>
                                        <td >13.5</td>
                                        <td >
                                            <span className="s-inch">11.5"</span>
                                            <span className="s-cm ">29.3</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >48</td>
                                        <td >12.5</td>
                                        <td >13</td>
                                        <td >14</td>
                                        <td >
                                            <span className="s-inch">11.7"</span>
                                            <span className="s-cm ">29.7</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </DIV>
        </Layout>
    )
}