/**
 * Created by akireyeu on 02.07.2019.
 */
({
    alexSetIcon: function(type, cmp, event, helper){

        var x = type.split('.');
        var ftype = x[x.length-1];
        //console.log(ftype);
        if( ftype.match(/(txt.*)/)){
            cmp.set("v.myText",'doctype:txt');}

        else  if( ftype.match(/(doc.*)/) || ftype.match(/(docx.*)/) ||
            ftype.match(/(odt.*)/)){
            cmp.set("v.myText", 'doctype:word');
        }

        else if( ftype.match(/(xls.*)/) || ftype.match(/(xlsx.*)/) ||
            ftype.match(/(ods.*)/)){
            cmp.set("v.myText", 'doctype:excel');
        }

        else if( ftype.match(/(pdf.*)/)){cmp.set("v.myText", 'doctype:pdf');}

        else if( ftype.match(/(csv.*)/)){cmp.set("v.myText", 'doctype:csv');}

        else if( ftype.match(/(7z.*)/) || ftype.match(/(arj.*)/)
            || ftype.match(/(deb.*)/) || ftype.match(/(pkg.*)/)
            || ftype.match(/(rar.*)/) || ftype.match(/(rpm.*)/)
            || ftype.match(/(z.*)/) || ftype.match(/(zip.*)/)) {
            cmp.set("v.myText", 'doctype:zip');
        }

        else if( ftype.match(/(xml.*)/)){cmp.set("v.myText", 'doctype:xml');}

        else if(ftype.match(/(vsdx.*)/) || ftype.match(/(vsdm.*)/)
            || ftype.match(/(vsd.*)/)) {
            cmp.set("v.myText", 'doctype:visio');
        }

        else if( ftype.match(/(3g2.*)/) || ftype.match(/(3gp.*)/)
            || ftype.match(/(avi.*)/) || ftype.match(/(flv.*)/)
            || ftype.match(/(h264.*)/) || ftype.match(/(m4v.*)/)
            || ftype.match(/(ps.*)/) || ftype.match(/(psd.*)/)
            || ftype.match(/(mkv.*)/) || ftype.match(/(mov.*)/)
            || ftype.match(/(wmv.*)/) || ftype.match(/(mpg.*)/)
            || ftype.match(/(mpeg.*)/) || ftype.match(/(rm.*)/)
            || ftype.match(/(swf.*)/) || ftype.match(/(vob.*)/)) {
            cmp.set("v.myText", 'doctype:video');
        }

        else if(ftype.match(/(pptx.*)/) || ftype.match(/(pptm.*)/)
            || ftype.match(/(ppt.*)/)) {
            cmp.set("v.myText", 'doctype:txt');
        }

        else if(ftype.match(/(rtf.*)/)) {cmp.set("v.myText", 'doctype:rtf');}

        else if(ftype.match(/(psd.*)/) || ftype.match(/(psb.*)/)) {
            cmp.set("v.myText", 'doctype:psd');
        }

        else if(ftype.match(/(pages.*)/)) {cmp.set("v.myText", 'doctype:pages');}

        else if(ftype.match(/(pack.*)/)) {cmp.set("v.myText", 'doctype:pack');}

        else if(ftype.match(/(mp4.*)/)) {cmp.set("v.myText", 'doctype:mp4');}

        else if( ftype.match(/(ai.*)/) || ftype.match(/(bmp.*)/)
            || ftype.match(/(gif.*)/) || ftype.match(/(ico.*)/)
            || ftype.match(/(jpeg.*)/) || ftype.match(/(jpg.*)/)
            || ftype.match(/(png.*)/) || ftype.match(/(mov.*)/)
            || ftype.match(/(ps.*)/) || ftype.match(/(psd.*)/)
            || ftype.match(/(svg.*)/) || ftype.match(/(tif.*)/)
            || ftype.match(/(tiff.*)/)) {
            cmp.set("v.myText", 'doctype:image');
            }

        else if(ftype.match(/(html.*)/)) {cmp.set("v.myText", 'doctype:html');}

        else if(ftype.match(/(swf.*)/) || ftype.match(/(fla.*)/)) {
            cmp.set("v.myText", 'doctype:flash');
        }

        else if(ftype.match(/(exe.*)/)) {cmp.set("v.myText", 'doctype:exe');}

        else if(ftype.match(/(eps.*)/)) {cmp.set("v.myText", 'doctype:eps');}

        else if(ftype.match(/(box.*)/)) {cmp.set("v.myText", 'doctype:box_notes');}

        else if( ftype.match(/(mp3.*)/) || ftype.match(/(wav.*)/)
            || ftype.match(/(wma.*)/) || ftype.match(/(ogg.*)/)
            || ftype.match(/(aac.*)/) || ftype.match(/(flac.*)/)
            || ftype.match(/(la.*)/) || ftype.match(/(m4a.*)/)
            || ftype.match(/(ape.*)/) || ftype.match(/(ofr.*)/)
            || ftype.match(/(rka.*)/) || ftype.match(/(shn.*)/)
            || ftype.match(/(tta.*)/) || ftype.match(/(tak.*)/)
            || ftype.match(/(wv.*)/) || ftype.match(/(wma.*)/)
            || ftype.match(/(pxd.*)/) || ftype.match(/(mp2.*)/)) {
            cmp.set("v.myText", 'doctype:audio');
        }

        else if(ftype.match(/(ai.*)/)) {cmp.set("v.myText", 'doctype:ai');}

        else {cmp.set("v.myText", 'doctype:unknown');}
    }
})