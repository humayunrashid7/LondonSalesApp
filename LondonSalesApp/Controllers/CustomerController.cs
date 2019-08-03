using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LondonSalesApp.Models;
using LondonSalesApp.Repository.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace LondonSalesApp.Controllers
{
    [Route("api/customers")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        // GET api/customers
        [HttpGet]
        public async Task<IActionResult> GetAllCustomers()
        {
            var customers = await _customerRepository.GetAllCustomers();

            if (customers == null) return NotFound();

            return Ok(customers);
        }

        // GET api/customers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCustomerById(int id)
        {
            var customer = await _customerRepository.GetCustomerById(id);

            if (customer == null) return NotFound();

            return Ok(customer);
        }

        // POST api/customers
        [HttpPost]
        public async Task<IActionResult> CreateCustomer([FromBody] Customer customer)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var newCustomerId = await _customerRepository.CreateCustomer(customer);

            return Ok(newCustomerId);
        }

        // PUT api/customers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCustomer(int id, [FromBody] Customer customer)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            await _customerRepository.UpdateCustomer(id, customer);

            return NoContent();
        }

        // DELETE api/customers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            await _customerRepository.DeleteCustomer(id);

            return NoContent();
        }
    }
}
