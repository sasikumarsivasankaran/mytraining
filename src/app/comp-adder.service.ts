import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompAdderService {
  viewRef: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  setViewRef(viewRef: ViewContainerRef) {
    this.viewRef = viewRef;
  }
  addComponent(compToAdd: any): void {
    const factory = this.resolver.resolveComponentFactory(compToAdd);
    const compRef = factory.create(this.viewRef.parentInjector);
    this.viewRef.insert(compRef.hostView);
  }
}
