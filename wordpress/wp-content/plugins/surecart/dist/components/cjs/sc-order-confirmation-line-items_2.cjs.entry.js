'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const consumer = require('./consumer-9f4ee0e3.js');
const price = require('./price-ca4a4318.js');
const tax = require('./tax-a4582e73.js');
require('./currency-71fce0f0.js');

const scOrderConfirmationLineItemsCss = ":host{display:block}.line-items{display:grid;gap:var(--sc-spacing-small)}.line-item{display:grid;gap:var(--sc-spacing-small)}.fee__description{opacity:0.75}";
const ScOrderConfirmationLineItemsStyle0 = scOrderConfirmationLineItemsCss;

const ScOrderConfirmationLineItems = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.order = undefined;
        this.loading = undefined;
    }
    render() {
        var _a, _b;
        if (!!this.loading) {
            return (index.h("sc-line-item", null, index.h("sc-skeleton", { style: { 'width': '50px', 'height': '50px', '--border-radius': '0' }, slot: "image" }), index.h("sc-skeleton", { slot: "title", style: { width: '120px', display: 'inline-block' } }), index.h("sc-skeleton", { slot: "description", style: { width: '60px', display: 'inline-block' } }), index.h("sc-skeleton", { style: { width: '120px', display: 'inline-block' }, slot: "price" }), index.h("sc-skeleton", { style: { width: '60px', display: 'inline-block' }, slot: "price-description" })));
        }
        return (index.h("div", { class: { 'confirmation-summary': true } }, index.h("div", { class: "line-items", part: "line-items" }, (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.line_items) === null || _b === void 0 ? void 0 : _b.data.map(item => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return (index.h("div", { class: "line-item" }, index.h("sc-product-line-item", { key: item.id, image: (_b = (_a = item === null || item === void 0 ? void 0 : item.price) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.line_item_image, name: `${(_d = (_c = item === null || item === void 0 ? void 0 : item.price) === null || _c === void 0 ? void 0 : _c.product) === null || _d === void 0 ? void 0 : _d.name}`, price: (_e = item === null || item === void 0 ? void 0 : item.price) === null || _e === void 0 ? void 0 : _e.name, variant: item === null || item === void 0 ? void 0 : item.variant_display_options, editable: false, removable: false, quantity: item.quantity, fees: (_f = item === null || item === void 0 ? void 0 : item.fees) === null || _f === void 0 ? void 0 : _f.data, amount: item.ad_hoc_display_amount ? item.ad_hoc_display_amount : item.subtotal_display_amount, scratch: !item.ad_hoc_display_amount && (item === null || item === void 0 ? void 0 : item.scratch_display_amount), trial: (_g = item === null || item === void 0 ? void 0 : item.price) === null || _g === void 0 ? void 0 : _g.trial_text, interval: `${(_h = item === null || item === void 0 ? void 0 : item.price) === null || _h === void 0 ? void 0 : _h.short_interval_text} ${(_j = item === null || item === void 0 ? void 0 : item.price) === null || _j === void 0 ? void 0 : _j.short_interval_count_text}`, purchasableStatus: item === null || item === void 0 ? void 0 : item.purchasable_status_display, sku: item === null || item === void 0 ? void 0 : item.sku })));
        }))));
    }
};
consumer.openWormhole(ScOrderConfirmationLineItems, ['order', 'busy', 'loading', 'empty'], false);
ScOrderConfirmationLineItems.style = ScOrderConfirmationLineItemsStyle0;

const scOrderConfirmationTotalsCss = ":host{display:block}";
const ScOrderConfirmationTotalsStyle0 = scOrderConfirmationTotalsCss;

const ScOrderConfirmationTotals = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.order = undefined;
    }
    renderDiscountLine() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (!((_c = (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.discount) === null || _b === void 0 ? void 0 : _b.promotion) === null || _c === void 0 ? void 0 : _c.code)) {
            return null;
        }
        let humanDiscount = '';
        if ((_e = (_d = this.order) === null || _d === void 0 ? void 0 : _d.discount) === null || _e === void 0 ? void 0 : _e.coupon) {
            humanDiscount = price.getHumanDiscount((_g = (_f = this.order) === null || _f === void 0 ? void 0 : _f.discount) === null || _g === void 0 ? void 0 : _g.coupon);
        }
        return (index.h("sc-line-item", { style: { marginTop: 'var(--sc-spacing-small)' } }, index.h("span", { slot: "description" }, wp.i18n.__('Discount', 'surecart'), index.h("br", null), ((_k = (_j = (_h = this.order) === null || _h === void 0 ? void 0 : _h.discount) === null || _j === void 0 ? void 0 : _j.promotion) === null || _k === void 0 ? void 0 : _k.code) && (index.h("sc-tag", { type: "success", size: "small" }, (_o = (_m = (_l = this.order) === null || _l === void 0 ? void 0 : _l.discount) === null || _m === void 0 ? void 0 : _m.promotion) === null || _o === void 0 ? void 0 : _o.code))), humanDiscount && (index.h("span", { class: "coupon-human-discount", slot: "price-description" }, "(", humanDiscount, ")")), (_p = this.order) === null || _p === void 0 ? void 0 :
            _p.discounts_display_amount));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (index.h("div", { key: 'e9baa3fcc9954a15132ad68d06a364def7109f2e', class: { 'line-item-totals': true } }, index.h("sc-line-item", { key: 'a6573e57b822fba7c6ce510d1e99cc943589a1b7' }, index.h("span", { key: '68e0aebdb9c470b4504659cee45f762bed61c920', slot: "description" }, wp.i18n.__('Subtotal', 'surecart')), index.h("span", { key: 'd02bcbe43afb626843c74ed5d0f65eb204dfc7bf', slot: "price" }, (_a = this.order) === null || _a === void 0 ? void 0 : _a.subtotal_display_amount)), this.renderDiscountLine(), !!((_b = this.order) === null || _b === void 0 ? void 0 : _b.bump_amount) && (index.h("sc-line-item", { key: '6e7adbb413d2956054f7140e8edddb815478510b', style: { marginTop: 'var(--sc-spacing-small)' } }, index.h("span", { key: '16b2e5206ea02cd515c2aa360068984dcb4627e9', slot: "description" }, wp.i18n.__('Bundle Discount', 'surecart')), index.h("span", { key: '5c1a9690e1d0b51b1c63a3b589f39ea0c6293958', slot: "price" }, (_c = this.order) === null || _c === void 0 ? void 0 : _c.bump_display_amount))), !!((_d = this.order) === null || _d === void 0 ? void 0 : _d.shipping_amount) && (index.h("sc-line-item", { key: 'b7165cef00e6e631049de140ade7fd9dd040e8a6', style: { marginTop: 'var(--sc-spacing-small)' } }, index.h("span", { key: '46c8bc1ae218f4370190f258b0e7353baa069854', slot: "description" }, wp.i18n.__('Shipping', 'surecart')), index.h("span", { key: 'eb3fbf3133a31c222275357df2e6a5047679ed67', slot: "price" }, (_e = this.order) === null || _e === void 0 ? void 0 : _e.shipping_display_amount))), !!((_f = this.order) === null || _f === void 0 ? void 0 : _f.tax_amount) && (index.h("sc-line-item", { key: 'e65e8f7db1a1038ab9d8bb14bc6f9f6965f9f1d1', style: { marginTop: 'var(--sc-spacing-small)' } }, index.h("span", { key: '14a7aa2a614566910eb6d5ae3838f11bde473367', slot: "description" }, tax.formatTaxDisplay((_g = this.order) === null || _g === void 0 ? void 0 : _g.tax_label), " ", `(${this.order.tax_percent}%)`), index.h("span", { key: 'ac98095305db5ed000430c3aa36eb5adc63132da', slot: "price" }, (_h = this.order) === null || _h === void 0 ? void 0 : _h.tax_display_amount))), index.h("sc-divider", { key: '18111d88a10dc032a709336dab9a4915dc5c6452', style: { '--spacing': 'var(--sc-spacing-small)' } }), index.h("sc-line-item-total", { key: '6780ad586769f79e51bedca85c40d098e54c332a', checkout: this.order, size: "large", "show-currency": true }, index.h("span", { key: '9e972dabaf66e1d070833e388ff8ae872bcbb015', slot: "description" }, wp.i18n.__('Total', 'surecart')))));
    }
};
consumer.openWormhole(ScOrderConfirmationTotals, ['order', 'busy', 'loading', 'empty'], false);
ScOrderConfirmationTotals.style = ScOrderConfirmationTotalsStyle0;

exports.sc_order_confirmation_line_items = ScOrderConfirmationLineItems;
exports.sc_order_confirmation_totals = ScOrderConfirmationTotals;

//# sourceMappingURL=sc-order-confirmation-line-items_2.cjs.entry.js.map