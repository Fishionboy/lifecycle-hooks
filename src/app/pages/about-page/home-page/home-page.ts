import { afterNextRender, Component, effect, OnChanges, OnDestroy, signal,  } from '@angular/core';
import { TitleComponent } from '../../../components/navbar/title/title.component';

const log = (...messages:string[])=>{
  console.log(`${messages[0]} %c${messages.slice(1).join(', ')}`, 
'color: #bada55'
);
}
@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.html',
})
export class HomePage implements OnDestroy, OnChanges {

  traditionalProperty = 'Javier';
  signalProperty = signal<string>('Javier');

  changeTraditional(){
    this.traditionalProperty = 'Fernando Herrera';
  }

  changeSignal(){
    this.signalProperty.set('Javier Herrar');
  }


  constructor() {
    console.log('Constructor llamado')
  }

  bassicEffect = effect((onCleanup)=>{
    console.log('effect','Disparar efectos secundarios');

    onCleanup(()=>{
      log('onCleanup','Se ejecutar cuando el efecto se va a destruir');
    })
  })
  ngOnDestroy(): void {
    console.log('ngOnDestroy','Runs once before the component is destroyed.');
  }


  ngOnInit() {
    console.log('ngOnInit','Runs once after Angular has initialized all the components inputs.');
  }
  ngOnChanges() {
    console.log('ngOnChanges','Runs every time the components inputs have changed.');
  }
  ngDoCheck() {
    console.log('ngDoCheck','	Runs every time this component is checked for changes.');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit','	Runs once after the components content has been initialized.');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked','	Runs every time this component content has been checked for changes.');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit','Runs once after the components view has been initialized.');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked', '	Runs every time the components view has been checked for changes.');
  }

  afterNextRenderEffect = afterNextRender(()=>{
    console.log('afterNextRenderEffect',' let you register a render callback to be invoked after Angular has finished rendering all components on the page into the DOM.');
  })
 
  //not available
  // afterRenderEffect = afterRender(()=>{
  //   console.log('afterNextRenderEffect',' let you register a render callback to be invoked after Angular has finished rendering all components on the page into the DOM.');
  // })

}
