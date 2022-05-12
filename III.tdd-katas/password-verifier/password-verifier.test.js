const { PasswordVerifier } = require('./password-verifier');

describe("given the PasswordVerifier function", () => {

    it("for the input 'Yolo12' the method checkLength should return an array that contains 'Password should be larger than 8 chars'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("Yolo12");

        //Act and assert
        expect(passwordVerifier.checkLength(8)).toContain("Password should be larger than 8 chars");
    });

    it("for null the method checkContent should throw an error", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier(null);

        //Act and assert
        expect(() => passwordVerifier.checkContent()).toThrow("Password should not be null");
    });

    it("for the input 'yolo1234' the method checkUppercase should return an array that contains 'Password should have one uppercase letter at least'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("yolo1234");

        //Act and assert
        expect(passwordVerifier.checkUppercase()).toContain("Password should have one uppercase letter at least");
    });

    it("for the input ' YOLO1234' the method checkLowercase should throw an error", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("YOLO1234");

        //Act and assert
        expect(() => passwordVerifier.checkLowercase()).toThrow("Password should have one lowercase letter at least");
    });

    it("for the input 'Yoloyolo' the method checkNumbers return an array that contains 'Password should have one number at least'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("Yoloyolo");

        //Act and assert
        expect(passwordVerifier.checkNumbers()).toContain("Password should have one number at least");
    });

    it("for the input ' YOLO1234' should return an array that contains 'Password should have one lowercase letter at least'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("YOLO1234");

        //Act
        const result = passwordVerifier.Verify();

        //Assert
        expect(result).toContain("Password should have one lowercase letter at least");
    });

    it("for the input 'Yolo12' it should it should pass because 3 conditions are fulfilled", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("Yolo12");

        //Act
        const result = passwordVerifier.Verify();

        //Assert
        expect(result).toBe("Password is ok");
    });

    it("for the input 'yoloo' it should it return an array that contains 'Password should have one uppercase letter at least'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("yoloo");

        //Act
        const result = passwordVerifier.Verify();

        //Assert
        expect(result).toContain("Password should have one uppercase letter at least");
    });

    it("for null it should return 'Password should not be null'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier(null);

        //Act
        const result = passwordVerifier.Verify();

        //Assert
        expect(result).toBe("Password should not be null");
    });

    it("for the input 'yolo1234' it should pass because 3 conditions are fulfilled", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("yolo1234");

        //Act
        const result = passwordVerifier.Verify();

        //Assert
        expect(result).toBe("Password is ok");
    });

    it("for the input 'Yoloyolo' it should pass because 3 conditions are fulfilled", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("Yoloyolo");

        //Act
        const result = passwordVerifier.Verify();

        //Assert
        expect(result).toBe("Password is ok");
    });

    it("for the input 'testtest' it should return an array that contains 'Password should have one uppercase letter at least'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("testtest");

        //Act
        const result = passwordVerifier.Verify();
        //Assert
        expect(result).toContain("Password should have one uppercase letter at least");
    });
});