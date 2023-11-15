import HospitalCatalog from "@/components/HospitalCatalog";
import { render, waitFor, screen } from "@testing-library/react";

const mockData = {
  success: true,
  count: 4,
  pagination: {},
  data: [
    {
      _id: "652e47436c9eaa7d3295b6d3",
      name: "Chulalongkorn Hospital",
      address: "1873 Rama IV Rd",
      district: "Pathum Wan",
      province: "Bangkok",
      postalcode: "10330",
      tel: "026494000",
      picture:
        "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
      __v: 0,
      id: "652e47436c9eaa7d3295b6d3",
    },
    {
      _id: "652e47766c9eaa7d3295b6d6",
      name: "Rajavithi Hospital",
      address: "2 Phaya Thai Rd, Thung Phaya Thai",
      district: "Ratchathewi",
      province: "Bangkok",
      postalcode: "10400",
      tel: "022062900",
      picture:
        "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
      __v: 0,
      id: "652e47766c9eaa7d3295b6d6",
    },
    {
      _id: "652e47b16c9eaa7d3295b6d9",
      name: "Thammasat University Hospital",
      address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      district: "Khlong Luang",
      province: "Pathum Thani",
      postalcode: "12120",
      tel: "029269999",
      picture:
        "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
      __v: 0,
      id: "652e47b16c9eaa7d3295b6d9",
    },
    {
      _id: "6540da4af8d4e8cb00819635",
      name: "Vajira Hospital",
      address: "681 Samsen Road",
      district: " Dusit",
      province: "Bangkok",
      postalCode: "10300",
      tel: "02-244-3000",
      picture:
        "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
      __v: 0,
      id: "6540da4af8d4e8cb00819635",
    },
  ],
};

describe('HospitalCatalog', () => {
  it('should have correct number of hospitals images', async() => {
    const testSubject = await HospitalCatalog({ hospitalJson: mockData });

    render(testSubject)

    await waitFor(()=>{
      const hospitalImages = screen.queryAllByRole('img')
      expect(hospitalImages.length).toEqual(4)
    })

  });
});