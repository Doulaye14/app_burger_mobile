import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  data: any;

  ngOnInit() {

  }

  allowedFormats = [ 
    BarcodeFormat.QR_CODE, 
    BarcodeFormat.EAN_13, 
    BarcodeFormat.CODE_128, 
    BarcodeFormat.DATA_MATRIX,
  ];

}
