const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all Contacts
//@routes GET /api/contacts
//access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create Contacts
//@routes POST /api/contacts
//access private
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    console.log("Please provide essential detail");
    res.status(400);
    throw new Error("Field are empty");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  console.log(contact)
  res.status(201).json(contact);
});

//@desc Get single Contacts
//@routes GET /api/contacts
//access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Update  Contacts
//@routes PUT /api/contacts
//access private

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact){
    res.status(404);
    throw new Error("Contact not Found ")
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  )
  res.status(200).json(updateContact);
});

//@desc Delete Contacts
//@routes DELETE /api/contacts
//access private

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact){
    res.status(404);
    throw new Error("Contact not Found ")
  }
  const del = await Contact.findByIdAndRemove(req.params.id);
  
  res.status(200).json(contact);

});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
