// To finish
// https://www.codewars.com/kata/59d582cafbdd0b7ef90000a0/train/javascript

class Inspector {
    constructor() {
        this.wanteds = []
        this.allowed = []
        this.denied = []
        this.typeSpecific = { workers: [], foreigners: [], entrants: [] } // values: access permit, ID card, work pass, polio vaccination, tetanus vaccination (can be false!!!)
        this.countrySpecific = { Arstotzka: [], Antegria: [], Impor: [], Kolechia: [], Obristan: [], Republia: [], "United Federation": [], }
    }

    receiveBulletin(bulletin) {
        let instructions = bulletin.split('\n')
        for (const instruction of instructions) {
            if (instruction.startsWith('Wanted by ')) {
                this.wanteds.push(instruction.split(': ')[1])
            } else if (instruction.startsWith('Allow')) {
                this.allowed = instruction.split(' of ')[1].split(', ')
            } else if (instruction.startsWith('Deny')) {
                this.denied = instruction.split(' of ')[1].split(', ')
            } else if (instruction.startsWith('Workers')) {
                this.typeSpecific.workers.push(instruction.split('require ')[1])
            } else if (instruction.startsWith('Foreigners')) {
                this.typeSpecific.foreigners.push(instruction.split('require ')[1])
            } else if (instruction.startsWith('Entrants')) {
                this.typeSpecific.entrants.push(instruction.split('require ')[1])
            } else if (instruction.startsWith('Citizens of')) {
                let c = instruction.split(' require')[0].split(' of ')[1].split(', ')
                let d = instruction.split('require ')[1]
                for (i of c) {
                    this.countrySpecific[i].push(d)
                }
            } else {
                console.log(`FAILED INSTRUCTION | ${instruction}`)
            }
        }
    }

    inspect(o) {

    }
}


// Method: inspect
// Each day, a number of entrants line up outside the checkpoint inspection booth to gain passage into Arstotzka. 
// The inspect method will receive an object representing each entrant's set of identifying documents. 
// This object will contain zero or more properties which represent separate documents. Each property will be a string value. These properties may include the following:

// Applies to all entrants:
// passport
// certificate_of_vaccination
// Applies only to citizens of Arstotzka
// ID_card
// Applies only to foreigners:
// access_permit
// work_pass
// grant_of_asylum
// diplomatic_authorization
// The inspect method will return a result based on whether the entrant passes or fails inspection:

// Conditions for passing inspection

// All required documents are present
// There is no conflicting information across the provided documents
// All documents are current (ie. none have expired) -- a document is considered expired if the expiration date is November 22, 1982 or earlier
// The entrant is not a wanted criminal
// If a certificate_of_vaccination is required and provided, it must list the required vaccination
// A "worker" is a foreigner entrant who has WORK listed as their purpose on their access permit
// If entrant is a foreigner, a grant_of_asylum or diplomatic_authorization are acceptable in lieu of an access_permit. In the case where a diplomatic_authorization is used, it must include Arstotzka as one of the list of nations that can be accessed.
// If the entrant passes inspection, the method should return one of the following string values:

// If the entrant is a citizen of Arstotzka: Glory to Arstotzka.
// If the entrant is a foreigner: Cause no trouble.
// If the entrant fails the inspection due to expired or missing documents, or their certificate_of_vaccination does not include the necessary vaccinations, return Entry denied: with the reason for denial appended.

// Example 1: Entry denied: passport expired.
// Example 2: Entry denied: missing required vaccination.
// Example 3: Entry denied: missing required access permit.
// If the entrant fails the inspection due to mismatching information between documents (causing suspicion of forgery) or if they're a wanted criminal, return Detainment: with the reason for detainment appended.

// If due to information mismatch, include the mismatched item. e.g.Detainment: ID number mismatch.
// If the entrant is a wanted criminal: Detainment: Entrant is a wanted criminal.
// NOTE: One wanted criminal will be specified in each daily bulletin, and must be detained when received for that day only. For example, if an entrant on Day 20 has the same name as a criminal declared on Day 10, they are not to be detained for being a criminal.
// Also, if any of an entrant's identifying documents include the name of that day's wanted criminal (in case of mismatched names across multiple documents), they are assumed to be the wanted criminal.
// In some cases, there may be multiple reasons for denying or detaining an entrant. For this exercise, you will only need to provide one reason.

// If the entrant meets the criteria for both entry denial and detainment, priority goes to detaining.
// For example, if they are missing a required document and are also a wanted criminal, then they should be detained instead of turned away.
// In the case where the entrant has mismatching information and is a wanted criminal, detain for being a wanted criminal.
// Test Example
// const bulletin = `Entrants require passport
// Allow citizens of Arstotzka, Obristan`;

// const inspector = new Inspector();
// inspector.receiveBulletin(bulletin);

// const entrant1 = {
//     passport:`ID#: GC07D-FU8AR
//     NATION: Arstotzka
//     NAME: Guyovich, Russian
//     DOB: 1933.11.28
//     SEX: M
//     ISS: East Grestin
//     EXP: 1983.07.10`
// };

// inspector.inspect(entrant1); //'Glory to Arstotzka.'


const bulletin = `Entrants require passport
Allow citizens of Arstotzka, Obristan`;

const inspector = new Inspector();
inspector.receiveBulletin(bulletin);
