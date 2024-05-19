import { describe, it,expect } from "vitest";

describe('example',()=>{
    it('should pass',()=>{
        const sum = 2+2
        expect(sum).toEqual(4)
    });
})