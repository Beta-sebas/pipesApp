import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interface';

@Pipe({
    name: 'color'
})
export class ColorPipe implements PipeTransform {
    transform(value: Color) {
        return Color[value]
    }
}