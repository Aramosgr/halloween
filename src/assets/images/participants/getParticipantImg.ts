const carmen = require('./carmen.png');
const cristina = require('./cristina.png');
const eli = require('./eli.png');
const fran = require('./fran.png');
const jose = require('./jose.png');
const julio = require('./julio.png');
const maite = require('./maite.png');
const nando = require('./nando.png');
const patri = require('./patri.png');
const rabia = require('./rabia.png');
const vito = require('./vito.png');
const virginia = require('./virginia.png');

export const getParticipantImg = (code: string | undefined) => {
    switch (code){
        case "a1": return [virginia, cristina]
        case "c2": return [rabia, maite]
        case "t3": return [julio, patri]
        case "y4": return [vito, carmen]
        case "o5": return [fran, eli]
        case "p6": return [nando, jose]
        default: return [];
    }
}
