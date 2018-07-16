namespace tutorialPoint{
    export namespace invoiceApp {
        export class Invoice {
            public calculateDiscount(price: number){
                return price * 0.40;
            }
        }
    }
}