import { driver } from 'driver.js';
import "driver.js/dist/driver.css";


const driverObj = driver({
    showProgress: true,
    doneBtnText: 'Listo',
    closeBtnText: 'Cerrar',
    nextBtnText: 'Siguiente',
    prevBtnText: 'Anterior',
    steps: [
        {
            element: '#atlas-button-explorar',
            popover: {
                title: 'explorar',
                description: 'Lorem ipsum em dolor',
            }
        },
       
        {
            element: '#home',
            popover: {
                title: 'home',
                description: 'Lorem ipsum em dolor',
            }
        },
        {
            element: '#about',
            popover: {
                title: 'about',
                description: 'Lorem ipsum em dolor',
            }
        },
        {
            element: '#services',
            popover: {
                title: 'services',
                description: 'Lorem ipsum em dolor',
            }
        },
        {
            element: '#contact',
            popover: {
                title: 'contact',
                description: 'Lorem ipsum em dolor',
            }
        },

    ]
});

export default driverObj;
