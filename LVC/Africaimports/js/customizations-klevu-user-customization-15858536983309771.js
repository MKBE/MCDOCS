var uc_helperFunctions={returnCustomerPrice:function(e){if("undefined"!=typeof klevu_loginCustomerGroup&&""===klevu_loginCustomerGroup||"WholesaleGroup"===klevu_loginCustomerGroup)for(var t=e.split(";"),a=0;a<t.length;a++){var o=t[a].split(":"),s=o[0],u=o[2];if(u=Number(u).toFixed(2),"WholesaleGroup"===s)return'<div class="ku-custom-group-price"><span>Wholesale Price:</span> <span>'+klevu_storeLandingCurrency+u+"</span></div>"}else if("undefined"!=typeof klevu_loginCustomerGroup&&"RetailGroup"===klevu_loginCustomerGroup)for(t=e.split(";"),a=0;a<t.length;a++){o=t[a].split(":"),s=o[0],u=o[2];if(u=Number(u).toFixed(2),"RetailGroup"===s)return'<div class="ku-custom-group-price"><span>Retail Price:</span> <span>'+klevu_storeLandingCurrency+u+"</span></div>"}}},klevu_uc={showLandingPageData:function(e){var t,a,o,s,u,i,r="",l="kuSalePrice",c="",n=document.getElementById("searchedKeyword").value,d="",v="",k=0,p=0,m=0,g=!1,h="",_=5,f=!0,w="",P=document.createElement("div"),C=!!e.additionalDataToReturn&&JSON.parse(e.additionalDataToReturn);e=klevu_productCustomizations(e),e.additionalFlags=C,0===e.productImage.trim().length&&(e.productImage=klevu_userOptions.noImageUrl),klevu_apiKey,c=klevu_userOptions.openProductClicksInNewWindow?' target="_blank"':' onclick="klevu_analytics.stopClickDefault( event );" target="_self"',d="{data: {code: '"+escape(e.productCode)+"',url: '"+escape(e.productUrl)+"',name: '"+escape(e.productName)+"',salePrice: '"+escape(e.salePrice)+"',rating: '"+escape(e.rating)+"',position: "+e.productPosition+",category: '"+escape(e.category)+"',sku: '"+escape(e.sku)+"'},apiKey: null,keywordsLP: '"+escape(n)+"'}",v=klevu_commons.isMobileDevice()?' onclick="return klevu_analytics.trackClickedProduct(event, '+d+');" target="_self">':' onmousedown="return klevu_analytics.trackClickedProduct(event, '+d+');" onkeydown="return klevu_eventHandler.handleElementKeydownEvent(event, '+d+', klevu_analytics.trackClickedProduct);" '+c+">";try{if(r+="<li>",r+='<div class="klevuImgWrap">',r+="<a  onfocus=\"klevu_eventHandler.handleProductFocusEvent('kuAddtocart-"+escape(e.productCode)+'\', event);"href="'+e.productUrl.replace(/"/g,"%22")+'" ',klevu_userOptions.showRolloverImage&&e.imageHover&&(r+=" onmouseleave = \"klevu_commons.updateProductThumbnailImage('"+escape(e.productImage)+"', 'klevuProductImage-"+e.id+"');\"  onmouseenter = \"klevu_commons.updateProductThumbnailImage('"+escape(e.imageHover)+"', 'klevuProductImage-"+e.id+"');\" "),P.innerHTML=e.productName,i=P.textContent||P.innerText||"",r+=' target="_blank" '+v+'<img id= "klevuProductImage-'+e.id+'" src="'+e.productImage+'" onerror="this.onerror=null;this.src=\''+klevu_userOptions.noImageUrl+'\';" alt="'+klevu_commons.escapeHtml(i)+'"/>',r+="</a></div>",klevu_userOptions.showProductSwatches&&e.swatches&&e.swatches.swatch&&e.swatches.swatch.length>0){for(_=e.swatches.swatch.length>_?_:e.swatches.swatch.length,k=0;k<_;k++)if(t=e.swatches.swatch[k],t.image){if(g=!0,t.swatchImage&&0===t.swatchImage.indexOf("#")?(u=t.swatchImage.split(";"),t.swatchImage=""):u=t.color.replace(/ /g,"").replace(/-/g,""),f=!0,"object"==typeof u){for(p=0;p<u.length;p++)if(u[p]&&!klevu_commons.isValidCSSColor(u[p])){f=!1;break}}else t.swatchImage||klevu_commons.isValidCSSColor(u)||(f=!1),klevu_commons.isValidCSSColor(u)||(u="");if(h+=f?'<div class="klevuSwatchItem">':'<div class="klevuSwatchItem klevuDefaultSwatch">',o="klevu_commons.updateProductThumbnailImage('"+escape(t.image)+"', 'klevuProductImage-"+e.id+"');",s="klevu_commons.updateProductThumbnailImage('"+escape(e.productImage)+"', 'klevuProductImage-"+e.id+"');",a=klevu_commons.isMobileDevice()?' onclick = "'+o+'" ':' onmouseleave = "'+s+'" onmouseenter = "'+o+'" onfocus = "'+o+'" onblur = "'+s+'" ',h+='<a href = "javascript:void(0);" class = "klevuSwatchLink" '+a,"object"==typeof u){var b=100/u.length;for(w="linear-gradient(-45deg,",p=0;p<u.length;p++)w+=0===p?" ":", ",w+=u[p]+" "+b*p+"%",w+=", "+u[p]+" "+b*(p+1)+"%";w+=" );",h+=' style = "background-image: '+w+"background-image: -webkit-"+w+"background-image: -moz-"+w+"background-image: -o-"+w+"background-image: -ms-"+w+'" title="'+t.color+'">'}else h+=' style = "background-color:'+u+"; background-image:url('"+t.swatchImage+'\');" title="'+t.color+'" target="_self">';h+="</a></div>"}else m+=1;e.swatches.swatch.length>_&&(m+=e.swatches.swatch.length-_),h=g?'<div class="klevuSwatches">'+h:'<div class="klevuSwatches" style="display:none;">'+h,m+=e.swatches.numberOfAdditionalVariants?+e.swatches.numberOfAdditionalVariants:0,m>0&&g&&(h+='<div class = "klevuSwatchItem klevuSwatchMore"><a href = "'+e.productUrl.replace(/"/g,"%22")+'" class = "klevuSwatchLink"'+v+'<span class = "klevuSwatchMoreText">+'+m+"</span></a></div>"),h+="</div>",r+=h}}catch(e){}if("undefined"!=typeof klevu_showDiscountBadge&&klevu_showDiscountBadge&&""!=e.discount&&"0"!=e.discount&&"0.0"!=e.discount&&(-1===klevu_uiLabels.discountBadgeText.indexOf("#")?r+='<div class="kuDiscountBadge">'+klevu_uiLabels.discountBadgeText+" "+Number(e.discount).toFixed(0)+"%</div>":r+='<div class="kuDiscountBadge">'+klevu_uiLabels.discountBadgeText.replace("#",Number(e.discount).toFixed(0)+"%")+"</div>"),r+='<div class="kuNameDesc">',r+='<div class="kuName"><a tabindex="-1" href="'+e.productUrl.replace(/"/g,"%22")+'" target="_blank" '+v,r+=e.productName+"</a></div>",r+='<div class="kuDesc">'+e.productDescription+"</div>",e.sku&&""!==e.sku&&(r+='<div class="ku-sku">'+e.sku+"</div>"),r+=klevu_landingProductElements.showRating(e),r+="</div>",r+='<div class="kuPrice">',klevu_showPrices){if(void 0!==e.customGroupPrices&&""!==e.customGroupPrices)try{r+=uc_helperFunctions.returnCustomerPrice(e.customGroupPrices)}catch(e){console.log(e)}var y=!0;try{if("undefined"!=typeof klevu_loginCustomerGroup&&("WholesaleGroup"===klevu_loginCustomerGroup||""===klevu_loginCustomerGroup)&&void 0!==e.customGroupPrices)for(var I=e.customGroupPrices.split(";"),S=0;S<I.length;S++){var G=I[S].split(":"),L=G[0],O=G[2];O=Number(O).toFixed(2),"RetailGroup"===L&&""!==O&&(y=!1,""===klevu_loginCustomerGroup?r+='<div class="kuSalePrice">Price: '+klevu_storeLandingCurrency+O+"</div>":r+='<div class="kuSalePrice">Retail Price: '+klevu_storeLandingCurrency+O+"</div>")}if("undefined"!=typeof klevu_loginCustomerGroup&&"RetailGroup"===klevu_loginCustomerGroup&&void 0!==e.customGroupPrices)for(I=e.customGroupPrices.split(";"),S=0;S<I.length;S++){G=I[S].split(":"),L=G[0],O=G[2];O=Number(O).toFixed(2),"RetailGroup"===L&&""!==O&&(y=!1,r+='<div class="kuSalePrice">Price: '+klevu_storeLandingCurrency+O+"</div>")}}catch(e){console.log(e)}y&&(r+=klevu_landingProductElements.showPrices(e,l).replace('"kuSalePrice">','"kuSalePrice">Price: '))}return klevu_userOptions.vatCaption.trim().length>0&&(r+='<div class="klevu-vat-caption">('+klevu_userOptions.vatCaption+")</div>"),e.totalProductVariants&&"0"!=e.totalProductVariants&&!g&&(-1===klevu_uiLabels.variants.indexOf("#")?r+='<div class="klevu-variants">+'+e.totalProductVariants+" "+klevu_uiLabels.variants+"</div>":r+='<div class="klevu-variants">'+klevu_uiLabels.variants.replace("#",e.totalProductVariants)+"</div>"),klevu_userOptions.outOfStockCaption.trim().length>0&&e.inStock&&"no"===e.inStock&&(r+='<div class="klevu-out-of-stock">'+klevu_userOptions.outOfStockCaption+"</div>"),r+="</div>",klevu_commons.showAddToCartButton(e.inStock,e.hideAddToCart)&&(r+=klevu_landingProductElements.showAddtocart(e)),r+='<div class="kuClearLeft"></div>',r+="</li>",r}};