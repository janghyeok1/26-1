library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

-- Uncomment the following library declaration if using
-- arithmetic functions with Signed or Unsigned values
--use IEEE.NUMERIC_STD.ALL;

-- Uncomment the following library declaration if instantiating
-- any Xilinx leaf cells in this code.
--library UNISIM;
--use UNISIM.VComponents.all;

entity Full_Adder is
    Port ( A : in STD_LOGIC;
           B : in STD_LOGIC;
           Carry_In : in STD_LOGIC;
           Sum : out STD_LOGIC;
           Carry_Out : out STD_LOGIC);
end Full_Adder;

architecture Behavioral of Full_Adder is
    signal t1, t2, t3 : std_logic;
begin
    t1 <= A xor B;
    t2 <= A and B;
    t3 <= t1 and Carry_In;
    Sum <= t1 xor Carry_In;
    Carry_Out <= t2 or t3;
end Behavioral;