export interface CheckoutFormData {
    name: string
    email: string
    phone: string
    address: string
    zipCode: string
    city: string
    country: string
    paymentMethod: "e-money" | "cash"
    eMoneyNumber?: string
    eMoneyPin?: string
  }
  
  export interface ValidationErrors {
    [key: string]: string
  }
  
  export function validateCheckoutForm(data: CheckoutFormData): ValidationErrors {
    const errors: ValidationErrors = {}
  
    // Required fields
    if (!data.name.trim()) {
      errors.name = "Name is required"
    }
  
    if (!data.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Please enter a valid email address"
    }
  
    if (!data.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (!/^\+?[\d\s\-$$$$]+$/.test(data.phone)) {
      errors.phone = "Please enter a valid phone number"
    }
  
    if (!data.address.trim()) {
      errors.address = "Address is required"
    }
  
    if (!data.zipCode.trim()) {
      errors.zipCode = "ZIP code is required"
    }
  
    if (!data.city.trim()) {
      errors.city = "City is required"
    }
  
    if (!data.country.trim()) {
      errors.country = "Country is required"
    }
  
    // E-money validation
    if (data.paymentMethod === "e-money") {
      if (!data.eMoneyNumber?.trim()) {
        errors.eMoneyNumber = "e-Money Number is required"
      } else if (!/^\d{9}$/.test(data.eMoneyNumber.replace(/\s/g, ""))) {
        errors.eMoneyNumber = "e-Money Number must be 9 digits"
      }
  
      if (!data.eMoneyPin?.trim()) {
        errors.eMoneyPin = "e-Money PIN is required"
      } else if (!/^\d{4}$/.test(data.eMoneyPin)) {
        errors.eMoneyPin = "e-Money PIN must be 4 digits"
      }
    }
  
    return errors
  }
  
  export function hasValidationErrors(errors: ValidationErrors): boolean {
    return Object.keys(errors).length > 0
  }
  