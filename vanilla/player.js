/**
 * Represents a player.
 * @class
 */
class Player {
    /**
     * Create a player.
     * @constructor
     * @param {number} id - The ID of the player.
     * @param {string} name - The name of the player.
     * @param {string} pos - The position of the player.
     * @param {number} number - The number of the player.
     */
    constructor(id, name, pos, number) {
        /**
         * The ID of the player.
         * @type {number}
         */
        this.id = id;
        
        /**
         * The name of the player.
         * @type {string}
         */
        this.name = name;
        
        /**
         * The position of the player.
         * @type {string}
         */
        this.pos = pos;
        
        /**
         * The number of the player.
         * @type {number}
         */
        this.number = number;
    }
    
    /**
     * Get the ID of the player.
     * @returns {number} The ID of the player.
     */
    getId() {
        return this.id;
    }
    
    /**
     * Get the name of the player.
     * @returns {string} The name of the player.
     */
    getName() {
        return this.name;
    }
    
    /**
     * Get the position of the player.
     * @returns {string} The position of the player.
     */
    getPosition() {
        return this.pos;
    }
    
    /**
     * Get the number of the player.
     * @returns {number} The number of the player.
     */
    getNumber() {
        return this.number;
    }
}