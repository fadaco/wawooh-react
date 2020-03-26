import React from "react";
import styled from "styled-components";
import { NairaSign } from "../../config";
import { numberWithCommas } from "../../shared/Methods";
import CustomModal from "../ui/CustomModal";
import BG_BANNER from "../../assets/svg/maskgroup.png";
import StyleDetails from '../Bespoke/StyleDetails';
import uploadIcon from "../../assets/svg/Upload.svg";
import Button from "../ui/Button";
import ShimmerLoader from '../ui/ShimmerLoader/Desktop';
import {withRouter} from 'react-router-dom';

export default withRouter((props) => {
    let imagePreviewUrl = props.imageState;
    const _changeValues = (ev) => {
        props.onChangeInput(ev.target.name, ev.target.value);
    };

    const getStylesList = props.list || [];
  return (
    <BespokeContainer>
      <div className="banner">
        <h3>Style Catalogue</h3>
      </div>
      <div className="display-content">
        <RowHolder>
          <Col12>
            <div className="inner-content">
            {
                props.loading 
                ? <div style={{display: 'flex',flexWrap: 'wrap',flex:'0 0 100%'}}>
                    {
                        [1].map((item, index) => (
                            <ShimmerLoader width={'100%'} key={index} />
                        ))
                    }
                </div>
                :
                <RowHolder>
                  {
                      getStylesList.map((item, index)=> {
                          return (
                            <Col12 key={index}>
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
                                        fontSize: 14,
                                        color: "grey",
                                        height: 19,
                                        overflow: "hidden"
                                      }}
                                    >
                                      Delivery Time: {item.estimatedDeliveryTime} {item.estimatedDeliveryTime > 1 ? 'days':'day'}
                                    </p>
                                  </div>
                                  <div>
                                    <p style={{ fontSize: 14, textAlign:'center' }}>
                                      {NairaSign}
                                      <span>
                                        {numberWithCommas(item.estimatedPrice)}
                                        <br/>
                                        <small style={{color:'var(--primary-color)'}}>Estimated Price</small>
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Card>
                            </Col12>
                          )
                      })
                  }
              </RowHolder>
            }
            </div>
          </Col12>

          <Col12>
            <div className="mobile-upload" onClick={props.openModal}>
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src={uploadIcon} alt={"uload"} />
                <small style={{ paddingLeft: "4px" }}>Upload Style</small>
              </span>
            </div>
          </Col12>
        </RowHolder>
      </div>
      <CustomModal
        open={props.showUpload}
        onClose={props.openModal}
        disableBackdropClick={true}
        maxWidth="md"
        onClick={props.openModal}
        rootClass={"modal-mobile"}
      >
        <UploadHolder>
          <div className="upholdHolder">
            <div className="textSide" onClick={props.toggle}>
              <span>
                <img src={uploadIcon} alt={"upload"} />
              </span>Upload Style
            </div>
            <div className="icon-side" onClick={props.toggle}>
              <i className="fa fa-caret-down" />
            </div>
          </div>
          <div className="upholdBody">
            <div className="form-group">
              <label className="upload-file" htmlFor="uploadStyle">
                <i className="fa fa-images" /> Add Image
                <input
                  type="file"
                  id="uploadStyle"
                  onChange={props.handlePreview}
                />
              </label>
            </div>
            <div className="form-group">
              <div style={{ height: "200px", marginTop: "3em" }}>
                {imagePreviewUrl ? (
                  <img
                    src={imagePreviewUrl}
                    style={{
                      borderRadius: "4px",
                      width: "100%",
                      height: "inherit",
                      objectFit: "cover",
                      border: "1px solid rgba(204,152,61, .3)"
                    }}
                    alt={"preview"}
                  />
                ) : (
                  <div
                    style={{
                      background: "#f7f7f7",
                      padding: "4em 2em",
                      fontWeight: "lighter",
                      borderRadius: "4px"
                    }}
                  >
                    Please, upload an image
                  </div>
                )}
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
                <Button label="Upload Style" bgColor='black' textColor='#fff' onClick={()=>props.history.push('/bespoke-request')}/>
            </div>
          </div>
        </UploadHolder>
      </CustomModal>
      <CustomModal
            open={props.openModal2}
            onClose={props.toggleModal}
            disableBackdropClick={true}
            maxWidth="md"
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
    height: 150px;
    background: url(${BG_BANNER}) no-repeat 25% 0;
    background-size: cover;
    h3 {
      color: var(--white-color);
      text-align: center;
      display: flex;
      margin: 0;
      align-items: center;
      justify-content: center;
      padding-top: 3rem;
      font-size: 1.5rem;
      text-transform: uppercase;
    }
  }
  .display-content {
    margin: 5px;
    padding: 5px 0;
    .inner-content {
    }
  }
  .mobile-upload {
    position: fixed;
    background: var(--dark-color);
    padding: 10px 20px;
    z-index: 999;
    color: var(--white-color);
    top: 35%;
    right: 0%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    box-shadow: 2px 5px 14px rgba(0, 0, 0, 0.4);
    transition: ease all 0.7s;
    animation: slideInRight 1s linear;
  }
`;
const UploadHolder = styled.div`
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
`
const RowHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Col12 = styled.div`
  width: 100%;
  flex: 0 0 100%;
  box-sizing: border-box;
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
