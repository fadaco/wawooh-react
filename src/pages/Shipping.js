import React from 'react';
import styled from 'styled-components'
import Layout from "../components/ui/Layout";

const DIV = styled.div`
padding: 30px;
background-color: white;
text-align: justify;
.terms-content{
    padding: 20px;
}

@media(min-width: 900px){
    .terms-content{
        padding: 0px 100px;
    }
}
`
export default () => (
    <Layout>
        <DIV>
            <div style={{ marginBottom: 30, fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>PAYMENT, SHIPPING &amp; DELIVERY POLICY</div>

            <div className="terms-content">
                <h3 className="brand-color makeBold">Payment Terms:</h3>
                <p>Payment for items bought on Wawooh can be made upon checkout of orders in your cart. Orders will only be processed after confirmation of payment by our Payments processing unit. Depending on your method of payment, some payments are automatically confirmed upon acceptance of the order by the vendor.</p>
                <p>In making payment, buyers have up to three methods of payment for any items they may wish to purchase on the platform; </p>

                <ol>
                    <li>Wawooh Pay (Visa &amp; Master Card)</li>
                    <li>Direct Bank Transfer and</li>
                    <li>Wawooh Wallet.</li>
                </ol>

                <p><em>Wawooh Pay</em> is a secured means of making payment on Wawooh through highly secured gateways. Only Visa and Mastercard cards are allowed on the platform for this payment method. Other cards will be integrated later in future.</p>

                <p><em>Direct Bank Transfer</em> can be done through any bank branch, Mobile Banking, USSD Banking and other money transfer platforms. The buyer only needs to make an intra or inter-bank transfer to Wawooh account advised in the mail sent to the buyer upon successful purchase on Wawooh.</p>

                <p><em>Wawooh Wallet</em> is a wallet account created for the buyer on Wawooh. It can be funded either by direct credit of through refund credit.</p>

                <h3 className="brand-color makeBold">Shipping Policy</h3>
                <p>We know how important it is to receive your purchased products in the finest condition and also at your expected time. So, we use trusted couriers in dispatching or delivering your orders in real-time. Please be informed that depending on the item(s) you purchase from Wawooh and the location to which the items will be delivered, different shipping methods are available. At checkout, you will be prompted to choose a shipping method for your item(s). Your total shipping charges will automatically compute during checkout prior to the completion of your order on Wawooh
                </p>

                <h3 className='brand-color makeBold'>Using your Fabric</h3>
                <p>In some cases, you may have a fabric you intend to use to make a bespoke wear. In such cases, you can either drop off your fabric at our office or request our logistics team to pick up at your preferred location. You will also be required to fill our material pickup or drop off form at the time of pickup. If you intend to use your fabric for a bespoke wear and you want us to pick up at your location, an additional cost for this service will be added to the total amount due on the order.</p>

                <h3 className="brand-color makeBold">Delivery Policy</h3>
                <p>Our customer care representative will communicate with you to confirm your order once it is placed. All items in your order will be shipped as soon as they are processed and checked for quality. The expected date of delivery will also be communicated to you prior to the actual date of shipment to ensure you are available to take delivery of your package when it arrives.
                </p>

                <p>Delivery time for items may vary depending on whether they are Ready-To-Wear or bespoke and also on the specified delivery location.</p>

                <p>For custom made items (bespoke), processing time would be according to production time specified on the product by the designer. For Ready-To-Wear items, a standard processing time of 2-3 working days applies.</p>

                <p>An indicative period for shipment within Lagos is 24 to 48hours, while shipments outside Lagos takes 3-5 business days. International shipping may take 7 to 14 working days depending on the location.</p>

                <p>If you have a mix of Ready-To-Wear and bespoke items in your order, we will send the ready-made items first and then ship the bespoke items once all processing have been completed.</p>

                <p>In case of any returns, defects etc. please refer to the Cancellation & Return Policy.</p>


                <h3 className="brand-color makeBold">International Orders:</h3>
                <p>We deliver worldwide. For International orders, depending on the country and the delivery methods delivery may take between 7 to 14 working days. This is aside the standard processing time required to process your order.</p>

                <h3 className="text-center brand-color makeBold">CANCELLATION &amp; RETURN POLICY</h3>
                <h3 className="brand-color makeBold">Cancellation Policy:</h3>
                <ul>
                    <li>You can cancel a Ready-To-Wear order free of charge as long as it has not been shipped. If your order has shipped before cancellation, the shipping fee will be deducted from the amount paid and the balance amount refunded to you once your cancellation request is processed.</li>
                    <li>Bespoke orders CANNOT be cancelled once your order has been accepted and payment confirmed, they can only be tweaked.</li>
                    <li>We will ensure that any communication of cancellation of an order or any applicable refund will be made in accordance with our refund policy.</li>
                    <li>Cancellations by customers for bespoke will not be considered if the vendor has started process of production or if the order is underway. Wawooh reserves all the rights to accept or decline any cancellations.</li>
                    <li>Any modifications to your order would also be governed by the above terms.</li>
                </ul>
                <h3 className="brand-color makeBold">Return Policy:</h3>

                <p><strong>To return,</strong> Kindly notify us within 3days upon receiving the item of your intension to return. Please note that the item to be returned must be returned within 7 working days after complaints has been made.
                For defects (items in damaged/defective condition) or wrong shipments, the return delivery of the item will be charged at no fee to you. Wawooh will cover return shipping charges for items that are received in a damaged/defective condition or when the incorrect item is sent.
                </p>

                <p>To return any of the Products delivered to you, simply place them in their original packaging and return through our courier partners. Our courier partners may also come and pick up the item from you within two to five days after your complaint has been received. </p>

                <p>However, if you wish to return the item yourself, simply package them and mail them back to us. For your protection, we suggest sending your return via insured parcel post providers. Wawooh will not be responsible if there are issues with your packages while in transit to our office. Wawooh will also determine that the Products were returned in their original condition and that defect claims are valid. Once this is confirmed, your order will be deemed to have been rejected and the package returned to us.</p>

                <p>Upon receiving your returned good, please allow up to 4-7 working days for your return to be fully processed. </p>

                <ul>
                    <li>All our clothing and other non-clothing items have QA tags attached as a mark that they underwent quality check before they were shipped. When, items are returned by customers, Wawooh expects that this tag is left as was originally attached to the item. Return of untagged items will not be accepted. </li>
                    <li>We will accept your returns for Ready-To-Wear and Bespoke orders. If an order is determined to be non-compliant (the product arrived damaged, there is a manufacturing defect, the color is starkly different than the color in the product picture, the measurements not exact, the product is not the same as the one shown on the product picture, the materials and the other descriptive elements are different from the reality (e.g Vendor stated cotton but item is actually linen) in clothing. </li>
                    <li>Returned items must be unused and unwashed. The item should be returned as received with its original tags and labels. </li>
                    <li>Wawooh reserves the right to:
                        <ul>
                            <li>Accept/reject Returns and/or Cancellations</li>
                            <li>Request for evidence of defect</li>
                        </ul>
                    </li>
                </ul>
                <p>If you are not satisfied with your Bespoke items or you need us to make alterations to your ordered item, please email us on – customercare@wawooh.com or call 07000-WAWOOH, 07000929664. </p>

                <br />
                <p>Return shipping costs due to buyer’s change of mind, incorrect ordering or sizing issues by buyer are not covered under this policy. Claims or cost for defect on such item (Ready-To-Wear and customized products) to be returned will be transferred to you and the return shipping cost will be borne by you. </p>

                <ul>
                    <li>After receiving and inspecting the returned merchandise, a refund (including the initial shipping fee if applicable) will be processed and made directly to the bank account used for the purchase price of the item. </li>
                    <li>Items that are rejected upon initial delivery and returned to us will be issued a full refund minus the cost paid to ship the item out to you. </li>
                    <li>Untagged items are not eligible for a refund. It is advisable that such items are not sent back to Wawooh. Please ensure your Quality tags are in their original state when returning items.</li>
                </ul>
            </div>
        </DIV>
    </Layout>
);
