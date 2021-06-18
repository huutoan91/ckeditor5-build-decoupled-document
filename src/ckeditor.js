/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import ClassicImageResize from '@emagtechlabs/ckeditor5-classic-image-resize/src/classicimageresize';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';
// A simple plugin that extends the remove format feature to consider links.
function RemoveFormatLinks( editor ) {
    // Extend the editor schema and mark the "linkHref" model attribute as formatting.
    editor.model.schema.setAttributeProperties( 'linkHref', {
        isFormatting: true
    } );
}
export default class DecoupledEditor extends DecoupledEditorBase {}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
	Essentials,
	Alignment,
	FontSize,
	FontFamily,
	FontColor,
	FontBackgroundColor,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	Underline,
	BlockQuote,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Link,
	AutoLink,
	LinkImage,
	List,
	ListStyle,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TableCaption,
	TableProperties, 
	TableCellProperties,
	TextTransformation,
	ClassicImageResize,
	Highlight,
	PageBreak,
	RemoveFormat,
	RemoveFormatLinks,
	HorizontalLine,
	SimpleUploadAdapter,
	BlockToolbar, 
	ParagraphButtonUI, 
	HeadingButtonsUI,
];

// Editor configuration.
DecoupledEditor.defaultConfig = {
			blockToolbar: {
				items: [
					'paragraph', 'heading1', 'heading2', 'heading3',
					'|',
					'bulletedList', 'numberedList',
					'|',
					'blockQuote', 'uploadImage'
				],
				shouldNotGroupWhenFull: true
			},
			heading: {
                options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                    { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                    { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                    { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                    { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
                ]
            },
			fontFamily: {
            options: [
                'default',
				'Arial, Helvetica, sans-serif',
				'Courier New, Courier, monospace',
				'Georgia, serif',
				'Lucida Sans Unicode, Lucida Grande, sans-serif',
				'Tahoma, Geneva, sans-serif',
				'Times New Roman, Times, serif',
				'Trebuchet MS, Helvetica, sans-serif',
				'Verdana, Geneva, sans-serif'
            ],
            supportAllValues: true
        },
            fontSize: {
                options: [
                    8,
                    9,
                    10,
                    11,
                    12,
                    14,
                    16,
                    18,
                    20,
                    22,
                    24,
                    26,
                    28,
                    36,
                    48,
                    72,
                ],
                supportAllValues: true
            },
            toolbar: {
                viewportTopOffset: 50,
                items: [
                    'heading',
                    '|',
                    'fontSize',
                    'fontFamily',
                    '|',
                    'fontColor',
                    'fontBackgroundColor',
                    '|',
                    'bold',
                    'italic',
                    'underline',
                    'strikethrough',
                    '|',
                    'alignment',
                    '|',
                    'numberedList',
                    'bulletedList',
                    '|',
                    'outdent',
                    'indent',
                    '|',
                    'link',
                    'blockQuote',
                    'imageUpload',
                    'insertTable',
                    'mediaEmbed',
                    '|',
                    'undo',
                    'redo',
                    'highlight',
                    'pageBreak',
                    'horizontalLine',
                    'removeFormat',                 
                    'uploadImage',
					
                ], shouldNotGroupWhenFull: true
            },
			image: {
				styles: [
					'full',
					'alignLeft',
					'alignRight',
					'alignCenter',
					
				],
				
				toolbar: [
					'linkImage',
					'|',
					'imageStyle:full',										
					'|',
					'imageStyle:alignLeft',
					'imageStyle:alignCenter',
					'imageStyle:alignRight',
					'|',
					'imageTextAlternative',
					'imageSize:lockAspectRatio',
					'imageSize:width',
					'imageSize:height',
				]
			},
			table: {
				contentToolbar: [
					'tableColumn', 'tableRow', 'mergeTableCells',
					'tableProperties', 'tableCellProperties', 'toggleTableCaption'
				],
					
				tableProperties: {
					borderStyle: 'dashed',
					borderColor: 'hsl(90, 75%, 60%)',
					borderWidth: '3px',
					alignment: 'left',
					width: '550px',
					height: '450px'
				},

				
				tableCellProperties: {
					defaultProperties: {
                    horizontalAlignment: 'center',
                    verticalAlignment: 'bottom',
                    padding: '10px'
                }
				}
			},
			title: {
				placeholder: 'My custom placeholder for the title',
				isEnable : false
			},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'vi'
};
