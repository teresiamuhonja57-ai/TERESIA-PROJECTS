/**
 * Validates if a value matches one of the specified types.
 * @param value - The variable to check.
 * @param allowedTypes - An array of type names (e.g., ["string", "number"]).
 * @returns boolean
 */
function validateUnionType(value: any, allowedTypes: string[]): boolean {
    // Get the primitive type of the value
    const valueType = typeof value;
    
    // Check if that type string exists in our allowed list
    return allowedTypes.includes(valueType);
}

// --- Usage Demonstration ---

const myId: any = 101;
const myName: any = "Alice";
const isActive: any = true;

const validOptions = ["string", "number"];

console.log(`Is myId (101) valid?`, validateUnionType(myId, validOptions)); 
// Output: true

console.log(`Is myName ("Alice") valid?`, validateUnionType(myName, validOptions)); 
// Output: true

console.log(`Is isActive (true) valid?`, validateUnionType(isActive, validOptions)); 
// Output: false (boolean is not in ["string", "number"])