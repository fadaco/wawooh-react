import React from "react";
import styled from "styled-components";
import { NairaSign } from "../../config";
import { numberWithCommas } from "../../shared/Methods";
import BG_BANNER from '../../assets/svg/maskgroup.png';
import uploadIcon from '../../assets/svg/Upload.svg';
import Button from "../ui/Button";
import CustomModal from '../ui/CustomModal';
import StyleDetails from '../Bespoke/StyleDetails';
import ShimmerLoader from '../ui/ShimmerLoader/Desktop';
import {withRouter} from 'react-router-dom';

export default withRouter((props) => {
    const upHolder = props.hide;
    let imagePreviewUrl = props.imageState;

    const _changeValues = (ev) => {
      props.onChangeInput(ev.target.name, ev.target.value);
    };

    const getStylesList = props.list || [];
    // LOGGER('bespoke desktop props', props);
   
  return (
    <BespokeContainer>
      <div className="banner" >
        <h3>Style Catalogue</h3>
      </div>
      <div className="display-content">
        <RowHolder>
          <Col9>
            <div className="inner-content">
            {
                props.loading
                ? <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {
                    [1,2,3,4,5,6,7,8].map((item, index) => (
                    <ShimmerLoader key={index} />
                    ))
                    }
                </div>
                :
                <RowHolder>
                {
                    getStylesList.map((item, index)=> {
                        return (
                          <Col4 key={index}>
                              <Card>
                            <div className="ProductImage">
                              <div className="productOverlay">
                                <img
                                  src={item.picture}
                                  alt={'name-trst'}
                                  className="imageOverlay"
                                />
                                <div
                                  className="overlay"
                                  onClick={() => props.toggleModal(item)}      
                                />
                              </div>
                            </div>
                            <div className="detailsParent">
                              <div className="productDetails">
                                <div>
                                <p style={{fontSize:'12px'}}>Designer: {item.designerName}</p>
                                  <p
                                    style={{
                                      cursor: "pointer",
                                      fontSize: 15,
                                      height: 19,
                                      overflow: "hidden"
                                    }}
                                    onClick={() => props.toggleModal(item)}
                                  >
                                    {item.keyWords}
                                  </p>
                                  <p
                                    style={{
                                      fontSize: 12,
                                      color: "grey",
                                      height: 19,
                                      overflow: "hidden"
                                    }}
                                  >
                                    Delivery Time: {item.estimatedDeliveryTime} {item.estimatedDeliveryTime > 1 ? 'days':'day'}
                                  </p>
                                </div>
                                <div>
                                  <p style={{ fontSize: 14 , textAlign:'center'}}>
                                    {NairaSign}
                                    <span>
                                      {numberWithCommas(item.estimatedPrice)}
                                    </span> <br/>
                                    <small style={{color:'var(--primary-color)'}}>Estimated Price</small>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Card>
                          </Col4>
                        )
                    })
                }
            </RowHolder>
            }
              
            </div>
          </Col9>
          <Col3>
            <div className="inner-content upholdCont">
              <div className="upholdHolder">
                <div className="textSide" onClick={props.toggle}><span><img src={uploadIcon} alt={'upload'}/></span> Upload Style</div>
                <div className="icon-side" onClick={props.toggle}><i className="fa fa-caret-down"></i></div>
              </div>
              <div className="upholdBody" style={{display: (upHolder ? 'block':'none')}}>
                <div className="form-group">
                <label className="upload-file" htmlFor="uploadStyle"><i className="fa fa-images"></i> Click to Add Image
                    <input type="file" id="uploadStyle" onChange={props.handlePreview}/>
                 </label>
                </div>
                <div className="form-group">
                    <div style={{height:'200px', marginTop:'3em'}}>
                    {
                        imagePreviewUrl 
                        ? 
                        <img src={imagePreviewUrl} style={{borderRadius:'4px',width:'100%', height:'inherit', objectFit:'cover', border:'1px solid rgba(204,152,61, .3)'}} alt={'preview'}/>
                        :
                        <div style={{background: '#f7f7f7',padding: '4em 2em',fontWeight: 'lighter', borderRadius: '4px'}}>Please, upload an image</div>
                    }
                    </div>
                </div>
                <div className="form-group">
                    <label className="label-style">Expected Delivery Date</label>
                    <input name="deliverydate" onChange={_changeValues} type="date" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="label-style">Budget</label>
                    <input type="number" name="budget" onChange={_changeValues} className="form-control"/>
                </div>
                <div className="form-group">
                    <Button label="Upload Style" bgColor='black' textColor='#fff' onClick={() => props.history.push('/bespoke-request')}></Button>
                </div>
              </div>
            </div>
          </Col3>
        </RowHolder>
      </div>
        <CustomModal
            open={props.openModal}
            onClose={props.toggleModal}
            disableBackdropClick={true}
            // maxWidth="md"
            onClick={props.toggleModal}
            rootClass={'modal-div'}
        >
            <StyleDetails data={props.modalContent}/>
        </CustomModal>
    </BespokeContainer>
  );
});

const BespokeContainer = styled.div`
  margin: 0;
  .banner {
    height: 300px;
    background: url(${BG_BANNER}) no-repeat center;
    background-size:cover;
    h3 {
      color: var(--white-color);
      text-align: center;
      display: flex;
      margin: 0;
      align-items: center;
      justify-content: center;
      padding-top: 8.3rem;
      font-size: 1.5rem;
      text-transform: uppercase;
    }
  }
  .display-content {
    margin: 5px;
    padding: 5px 4em;
    .inner-content {
    //   border: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
  .upholdCont {
      margin-top:5px;
      border-radius: 4px;
      border: 1px solid rgba(204,152,61, .6);
      .upholdHolder {
          overflow: hidden;
          display: flex;
          background: var(--primary-color);
          color: var(--white-color);
          justify-content: space-between;
          .textSide {
            padding: 10px;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            &:hover {
                cursor: pointer;
                background: ##865b12;
            }
        }
        .icon-side {
            padding: 10px 15px;
            border-left: 1px solid #fff;
            &:hover {
                cursor: pointer;
                background: ##865b12;
            }
        }
    }
    .upholdBody {
        border-radius: 4px;
        padding: 10px;
        overflow: hidden;
        background: var(--white-color);
        .label-style {
            font-weight: bold;
        }
        .upload-file {
            input[type=file] {
                display: none;
            }
            font-weight: bold;
            position:relative;
            display:block;
            padding: 10px 6px;
            &:after {
                content: '';
                position: absolute;
                width: 100%;
                border-bottom:1px solid rgba(204,152,61, .3);
                height: 1px;
                bottom: -10px;
                left: 0;
                right:0;
            }
            &:hover { 
              cursor: pointer;
            }
        }
    }
  }
  .form-group {
    margin-bottom: 1rem;
    }
    .form-control {
        margin-top: 3px;
        display: block;
        width: 100%;
        height: calc(2.5em + 5px);
        padding: .375rem .75rem;
        font-size: 1rem;
        outline: none;
        background-color: #f7f7f7;
        border: 1px solid rgba(0,0,0,.02);
        border-radius: 0;
        box-sizing: border-box;
        &:focus {
            box-shadow: none;
            border:1px solid rgba(0,0,0,.8);
        }
    }
`;
const Card = styled.div`
  height: 395px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  .button-class {
    position: absolute;
    z-index: 500;
    right: 0;
    left: 0;
    top: 139px;
    opacity: 0;
  }
  .ProductImage {
    height: 83%;
    position: relative;
    .productOverlay {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .heartIcon {
      position: absolute;
      right: 8px;
      top: 8px;
      z-index: 10;
      border-radius: 50%;
      background-color: white;
      height: 18px;
      width: 18px;
      padding: 8px;
      box-sizing: content-box;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .detailsParent {
    height: 17%;
    overflow: hidden;
    .productDetails {
      margin-top: 5px;
      padding: 0px 10px;
      padding-bottom: 5px;
      display: flex;
      justify-content: space-between;
    }
    p {
      margin: 3px 0px;
    }
  }
  .bold {
    font-weight: bold;
  }
  .productOverlay {
    position: relative;
  }
  &:hover .overlay {
    opacity: 1;
  }
  &:hover .button-class {
    opacity: 1;
  }
  .imageOverlay {
    opacity: 1;
    display: block;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  .overlay {
    transition: 0.5s ease;
    background-color: rgb(0, 0, 0, 0.15);
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;

    div {
      text-align: center;
      position: absolute;
      bottom: 5%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
  }
`;

const RowHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Col4 = styled.div`
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
`
const Col9 = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;
const Col3 = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;
